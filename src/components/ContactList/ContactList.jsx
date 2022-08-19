import React from 'react';
// import classNames from 'classnames';
import 'components/ContactList/ContactList.css';



export const ContactList = ({ visibleContacts, onDeleteTodo }) => (
  <ul className="TodoList">
    {visibleContacts.map(({ id, name, number }) => (
      <li
        key={id}
        className="TodoList__item"
      >
        <p className="TodoList__text">{name}: <span className="TodoList__number">{number}</span></p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// export default Filter;
