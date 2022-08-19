import React from 'react';
import PropTypes from 'prop-types';


// import classNames from 'classnames';
import 'components/ContactList/ContactList.css';



export const ContactList = ({ visibleContacts, onDeleteTodo }) => (
  <ul className="ContactList">
    {visibleContacts.map(({ id, name, number }) => (
      <li
        key={id}
        className="ContactList__item"
      >
        <p className="ContactList__text">{name}: <span className="ContactList__number">{number}</span></p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};



// export default Filter;
