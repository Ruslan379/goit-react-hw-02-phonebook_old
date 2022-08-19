import React from 'react';
import PropTypes from 'prop-types';

import 'components/Filter/Filter.css';



export const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



// export default Filter;
