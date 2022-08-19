import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import 'components/ContactForm/ContactForm.css';


// import shortid from 'shortid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
    // tag: '',
    // experience: 'junior',
    // licence: false,
  };

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
    this.setState({ name: '', number: '' });
  };



  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state; 
    // console.log(event); //!
    // console.log("this.props.contacts: ", this.props.contacts); //!

    // console.log(this.state); //!
    // console.log(this.state.contacts); //!

    // this.state.contacts.push(this.state.name);

    // const contactsObj = { name: this.state.name, id: nanoid() }
    // console.log(contactsObj); //!

    //! принимаем props от ContactForm contacts={contacts} из App
    const contacts = this.props.contacts
    // this.state.contacts.push({ name: this.state.name, id: nanoid() });

    //! alert с предупреждением о наявности контакта
    // console.log("contacts[0]: ", contacts[0]); //!

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      // console.log("if name:", name); //!
        alert(`${name} is already in contacts.`);
        return;
    } else {
      // console.log("else name:", name); //!
      contacts.push({ id: nanoid(), name: name, number: number, });
      }
    

    this.props.onSubmit(this.state, this.props.contacts);

    // console.log("contacts[0].name: ", contacts[0].name); //!

    this.reset();
  };











  // nameInputId = shortid.generate();
  // tagInputId = shortid.generate();

  // handleChange2 = e => {
  //   const { name, value } = e.currentTarget;

  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   this.props.onSubmit(this.state);

  //   this.reset();
  // };

  // handleLicenceChange = e => {
  //   console.log(e.currentTarget.checked);

  //   this.setState({ licence: e.currentTarget.checked });
  // };

  // reset = () => {
  //   this.setState({ name: '', tag: '' });
  // };






  render() {
    const { name, number } = this.state;
    // const { contacts } = this.props; //!
    // console.log("contacts: ", contacts); //!
    // console.log("this.props.contacts: ", this.props.contacts); //!
    

    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor={this.nameInputId}>
      //     Имя
      //     <input
      //       type="text"
      //       name="name"
      //       value={this.state.name}
      //       onChange={this.handleChange2}
      //       id={this.nameInputId}
      //     />
      //   </label>
      //   <br />
      //   <label htmlFor={this.tagInputId}>
      //     Прозвище
      //     <input
      //       type="text"
      //       name="tag"
      //       value={this.state.tag}
      //       onChange={this.handleChange2}
      //       id={this.tagInputId}
      //     />
      //   </label>

      //   <p>Ваш уровень:</p>
      //   <label>
      //     <input
      //       type="radio"
      //       name="experience"
      //       value="junior"
      //       onChange={this.handleChange2}
      //       checked={this.state.experience === 'junior'}
      //     />
      //     Junior
      //   </label>

      //   <label>
      //     <input
      //       type="radio"
      //       name="experience"
      //       value="middle"
      //       onChange={this.handleChange2}
      //       checked={this.state.experience === 'middle'}
      //     />
      //     Middle
      //   </label>
      //   <label>
      //     <input
      //       type="radio"
      //       name="experience"
      //       value="senior"
      //       onChange={this.handleChange2}
      //       checked={this.state.experience === 'senior'}
      //     />
      //     Senior
      //   </label>

      //   <br />

      //   <label>
      //     <input
      //       type="checkbox"
      //       name="licence"
      //       checked={this.state.licence}
      //       onChange={this.handleLicenceChange}
      //     />
      //     Согласен с условием
      //   </label>

      //   <button type="submit" disabled={!this.state.licence}>
      //     Отправить
      //   </button>
      // </form>

      <form
          className="Form"
          onSubmit={this.handleSubmit}>

          <label htmlFor={this.contactInputId}>
            Name
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
              id={this.contactInputId}
            />
          </label>
          <br />

          <label htmlFor={this.contactInputId}>
            Number
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
              id={this.contactInputId}
            />
          </label>
          <br />

        <button
          className="Form__btn"
          type="submit">
            Add contact
          </button>
        </form>
      
    );
  }
}

// export default ContactForm;
