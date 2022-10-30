import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import initialContacts from './ContactList/initialContacts.json';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Wrapper, Title, Title2, Title3 } from './App.styled';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  //!!<>
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  //!!<>

  //!!<>

  //!!< МЕТОД СОХРАНЕНИЯ в localStorage >

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    console.log(parseContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось  поле contacts');

      //   console.log(prevState);
      // console.log(this.state);

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  //!!<>

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />

          <Title2>Contacts</Title2>
          <Title3>Find contact by name</Title3>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Wrapper>
      </>
    );
  }
}

export default App;
