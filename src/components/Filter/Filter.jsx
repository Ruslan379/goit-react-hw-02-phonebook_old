import React from 'react';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

// export default Filter;
