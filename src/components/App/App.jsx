import React, { Component } from 'react';
// ! +++++++++ Книга контактов +++++++++++++ 
import { nanoid } from 'nanoid'

//!____________ Книга контактов ___________ 
import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from '../Container';
import TodoList from '../TodoList';
import TodoEditor from '../TodoEditor';
import Filter from '../Filter';
// import Form from './components/Form';
import initialTodos from 'components/todos.json';






export class App extends Component {

  state = {
    // ! +++++++++ Книга контактов +++++++++++++ 
    contacts: [],
    name: "",




    //!____________ Книга контактов ___________ 
    
    todos: initialTodos,
    filter: '',
  };



  // ! +++++++++ Книга контактов +++++++++++++ 
  contactInputId = nanoid();

  handleChange1 = event => {
    // const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });

    this.setState({ name: event.currentTarget.value });
  };




  //!____________ Книга контактов ___________ 




  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      // todos: [todo, ...todos],
      todos: [...todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    //* this.setState(prevState => ({
    //*   todos: prevState.todos.map(todo => {
    //*    if (todo.id === todoId) {
    //*       return {
    //*         ...todo,
    //*         completed: !todo.completed,
    //*       };
    //*     }

    //*     return todo;
    //*   }),
    //* }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };



  //*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  render() {
    // ! +++++++++ Книга контактов +++++++++++++ 


    //!____________ Книга контактов ___________ 
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();





    return (
      <Container>
        {/*//! +++++++++ Книга контактов +++++++++++++ */}
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit1}>

          <label htmlFor={this.contactInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange1}
              id={this.contactInputId}
            />
          </label>

          <button type="submit">
            Add contact
          </button>

          <h1>Contacts</h1>

        </form>



        {/*//!____________ Книга контактов ___________ */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        {/* TODO: вынести в отдельный компонент */}

        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
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