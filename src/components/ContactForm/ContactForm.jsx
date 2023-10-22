import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      return;
    }

    this.props.onSubmit({ name, number });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Dodaj kontakt</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={(e) => this.setState({ number: e.target.value })}
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <button type="submit">Dodaj kontakt</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;