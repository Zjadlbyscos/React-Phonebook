import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
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
        <h2>Add Contact</h2>
        <form className={s.submit} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={this.state.number}
            onChange={e => this.setState({ number: e.target.value })}
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <button className={s.btn} type="submit">
            ADD CONTACT
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactForm;
