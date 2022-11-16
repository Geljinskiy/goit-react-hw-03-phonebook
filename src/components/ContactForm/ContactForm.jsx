import React from 'react';

import styled from 'styled-components';

import MainButtonStyle from 'components/MainButtonStyle';
import Label from 'components/Label';

const FormWrapper = styled.form`
  border: 1px solid #000000;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onInput = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
  };

  onFormSubmit = ev => {
    ev.preventDefault();
    const { addContact } = this.props;

    addContact({ name: this.state.name, number: this.state.number });

    ev.currentTarget.reset();
  };

  render() {
    return (
      <FormWrapper onSubmit={this.onFormSubmit}>
        <Label>
          <p>Name</p>
          <input
            onChange={this.onInput}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <p>Number</p>
          <input
            onChange={this.onInput}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <MainButtonStyle type="submit">Add to contact</MainButtonStyle>
      </FormWrapper>
    );
  }
}
