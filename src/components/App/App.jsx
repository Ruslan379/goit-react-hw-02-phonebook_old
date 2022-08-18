import React, { Component } from 'react';
// ! +++++++++ Книга контактов +++++++++++++ 
import { nanoid } from 'nanoid'

//!____________ Книга контактов ___________ 
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';

import Container from '../Container';
// import TodoList from '../TodoList';
// import TodoEditor from '../TodoEditor';
// import Filter from '../Filter';

// import Form from './components/Form';
// import initialTodos from 'components/todos.json';






export class App extends Component {

  state = {
    // ! +++++++++ Книга контактов STATE +++++++++++++ 
    contacts: [],
    name: ""




    //!____________ Книга контактов ___________ 
    
    // todos: initialTodos,
    // filter: '',
  };



  // ! +++++++++ Книга контактов МЕТОДЫ +++++++++++++ 

  contactInputId = nanoid();



  handleChange = event => {
    // console.log(event.currentTarget); //!
    // console.log(event.currentTarget.name); //!
    // console.log(event.currentTarget.value); //!

    // this.setState({ name: event.currentTarget.value });
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });

    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };


  reset = () => {
    this.setState({ name: '' });
  };


  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name } = this.state;

    // console.log(this.state); //!
    // console.log(this.state.contacts); //!

    // this.state.contacts.push(this.state.name);

    // const contactsObj = { name: this.state.name, id: nanoid() }
    // console.log(contactsObj); //!

    // this.state.contacts.push({ name: this.state.name, id: nanoid() });
    contacts.push({ name: name, id: nanoid() });

    // this.props.onSubmit(this.state);

    this.reset();
  };

  //!____________ Книга контактов ___________ 




  // addTodo = text => {
  //   console.log(text);
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     // todos: [todo, ...todos],
  //     todos: [...todos, todo],
  //   }));
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   //* this.setState(prevState => ({
  //   //*   todos: prevState.todos.map(todo => {
  //   //*    if (todo.id === todoId) {
  //   //*       return {
  //   //*         ...todo,
  //   //*         completed: !todo.completed,
  //   //*       };
  //   //*     }

  //   //*     return todo;
  //   //*   }),
  //   //* }));

  //   this.setState(({ todos }) => ({
  //     todos: todos.map(todo =>
  //       todo.id === todoId
  //         ? { ...todo, completed: !todo.completed }
  //         : todo,
  //     ),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleTodos = () => {
  //   const { filter, todos } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(todo =>
  //     todo.text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // calculateCompletedTodos = () => {
  //   const { todos } = this.state;

  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0,
  //   );
  // };



  //*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  render() {
    // ! +++++++++ Книга контактов +++++++++++++ 
    const { contacts } = this.state;
    console.log("contacts: ", contacts); //!
    //  console.log("contactInputId: ", this.contactInputId); //!




    //!____________ Книга контактов ___________ 
    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();





    return (
      <Container>
        {/*//! +++++++++ Книга контактов +++++++++++++ */}
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor={this.contactInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.contactInputId}
            />
          </label>

          <button type="submit">
            Add contact
          </button>

          <h1>Contacts</h1>
          <ul>
            {contacts.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </form>

        {/*//!____________ Книга контактов ___________ */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        {/* TODO: вынести в отдельный компонент */}

        {/* <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div> */}

        {/* <TodoEditor onSubmit={this.addTodo} />  */}

        {/* <Filter value={filter} onChange={this.changeFilter} /> */}

        {/* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
      </Container>
    );
  }
}

// export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


//! old --------------------------------------------
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };