import styled from 'styled-components';

import MainButtonStyle from 'components/MainButtonStyle';

const ContactItem = styled.span`
  margin-right: 16px;
  font-size: 20px;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListWrapper>
              <ContactItem>
                {name}: {number}
              </ContactItem>
              <MainButtonStyle onClick={() => onDelete(id)} type="button">
                Delete
              </MainButtonStyle>
            </ListWrapper>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default ContactList;
