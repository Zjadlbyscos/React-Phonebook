import React from 'react';
import s from "./Filter.module.css"

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <h2 > Find Contacts By Name</h2>
      <input className={s.input}
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Filter;