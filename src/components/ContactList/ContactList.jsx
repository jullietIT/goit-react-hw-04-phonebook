import React from 'react';
import { ListContact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ListContact>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteContact(id)}>
          delete
        </Button>
      </li>
    ))}
  </ListContact>
);

export default ContactList;
