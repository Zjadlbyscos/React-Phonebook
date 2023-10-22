import React, { Component } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import style from './App.module.css';

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
  handleContactSubmit = ({ name, number }) => {
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert('A contact with this name already exists!');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  handleContactDelete = contactId => {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this contact?'
    );

    if (shouldDelete) {
      const updatedContacts = this.state.contacts.filter(
        contact => contact.id !== contactId
      );

      this.setState({
        contacts: updatedContacts,
      });
    }
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  getFilteredContacts() {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  }
  render() {
    return (
      <div className={style.form}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />

        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        ></Filter>
        <Contacts
          contacts={this.getFilteredContacts()}
          onContactDelete={this.handleContactDelete}
        />
      </div>
    );
  }
}

export default App;
