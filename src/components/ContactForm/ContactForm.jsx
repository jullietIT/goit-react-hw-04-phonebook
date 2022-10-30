import React, { Component } from 'react';

import { WrapperForm, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });
    // this.setState({ name: '', number: '' });

    this.reset();
  };

  // //очистка формы
  reset = () => {
    this.setState({
      // contacts: [],
      name: '',
      number: '',
    });
  };

  ///👌

  // Можно использовать любой пакет для генерации уникальных строк

  render() {
    return (
      <WrapperForm>
        <form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // value={this.state.name}
              // onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </WrapperForm>
    );
  }
}

export default ContactForm;
