import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Filtruj kontakty</h2>
      <input
        type="text"
        placeholder="Wyszukaj"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Filter;