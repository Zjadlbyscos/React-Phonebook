import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <h2> Find Contacts By Name</h2>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
