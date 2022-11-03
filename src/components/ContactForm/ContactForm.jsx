// import React, { Component } from 'react';
import { useState } from 'react';

import { WrapperForm, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm(addContact) {
  const [name, setNames] = useState('');
  const [number, setNumbers] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setNames(value);
        break;

      case 'number':
        setNumbers(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setNames('');
    setNumbers('');
  };

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleChange}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </form>
    </WrapperForm>
  );
}
