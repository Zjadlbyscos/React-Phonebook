import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
// import nanoid from 'nanoid';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (
      !this.state.name.match(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
      )
    ) {
      return;
    }
    const id = nanoid();

    const contact = {
      id: nanoid(),
      name: this.state.name,
    };


    this.setState({
      contacts: [...this.state.contacts, contact],
      name: '',
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
          <button type="submit">Dodaj kontakt</button>
        </form>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
