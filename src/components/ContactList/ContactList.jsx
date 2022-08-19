import React from 'react';

export const ContactList = ({ visibleContacts }) => (
  <ul>
    {visibleContacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}: {number}</p>
      </li>
    ))}
  </ul>
);

// export default Filter;
