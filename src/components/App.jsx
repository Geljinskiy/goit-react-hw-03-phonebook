import React from 'react';

import styled from 'styled-components';
import { nanoid } from 'nanoid';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './FIlter';
import Box from './Box';

const MainHeading = styled.h1`
  margin-bottom: 32px;
`
const Heading = styled.h2`
  margin-bottom: 32px;
`

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddingContact = ({ name, number }) => {
    if (
      this.state.contacts.filter(contact => contact.name === name).length > 0
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      };
    });
  };

  onFilter = ev => {
    this.setState({ filter: ev.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const regNormolize = sentence => {
      return sentence.toLowerCase().trim();
    };

    return contacts.filter(contact => {
      return (
        regNormolize(contact.name).includes(regNormolize(filter)) ||
        regNormolize(contact.number).includes(regNormolize(filter))
      );
    });
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box mt={ 40 } ml={40}>
        <Box mb={32} fontSize={18} width={380}>
          <MainHeading>Phonebook</MainHeading>
          <ContactForm addContact={this.onAddingContact} />
        </Box>

        <Box fontSize={18} width={360}>
          <Heading>Contacts</Heading>
          <Filter filter={this.state.filter} onFilter={this.onFilter} />
          <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
        </Box>
      </Box>
    );
  }
}
