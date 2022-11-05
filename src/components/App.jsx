// import React, { Component } from 'react';
import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import initialContacts from './ContactList/initialContacts.json';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Wrapper, Title, Title2, Title3 } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });

  const [filter, setFilter] = useState('');

  const checkContactsName = (contacts, newContactname) => {
    const normalizedName = newContactname.toLowerCase();
    return contacts.some(({ name }) => normalizedName === name.toLowerCase());
  };

  const addContact = (name, number) => {
    if (checkContactsName(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />

        <Title2>Contacts</Title2>
        <Title3>Find contact by name</Title3>

        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Wrapper>
    </>
  );
}
