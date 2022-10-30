import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ContactEditor extends Component {
  state = {
    name: '',
  };
  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefolt();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.name}
          onChange={this.handleChange}
        ></textarea>
        <button tupe="submit">Coздать</button>
      </form>
    );
  }
}

export default ContactEditor;
