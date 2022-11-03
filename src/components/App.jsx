// import React, { Component } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
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

  const addContact = (name, number) => {
    contacts.every(contact => contact.name.toLowerCase() !== name.toLowerCase())
      ? setContacts([...contacts, { name, number, id: nanoid() }])
      : alert(`${name} is alredy in contacts`);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // const formSubmitHandler = data => {
  //   console.log(data);
  // };

  const visibleContacts = getVisibleContacts();

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
