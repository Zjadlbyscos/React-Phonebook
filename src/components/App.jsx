import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
// import nanoid from 'nanoid';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
      name: '',
      number: '',
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    // if (!this.state.name.match(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)) {
    //   return;
    // }
    // if (!this.state.number.match(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)) {
    //   return;
    // }

    // const id = nanoid();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState({
      contacts: [...this.state.contacts, contact],
      name: '',
      number: '',
    });
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <div>
        <h1>Książka telefoniczna</h1>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={e => this.setState({ number: e.target.value })}
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <button type="submit">Dodaj kontakt</button>
        </form>
        <input
          type="text"
          placeholder="Wyszukaj"
          onChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <Contacts contacts={this.getFilteredContacts()} />
      </div>
    );
  }

getFilteredContacts() {
  return this.state.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(this.state.filter);
  });
}
}

export default App;
