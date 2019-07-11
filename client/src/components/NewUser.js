import React, { Component } from 'react'
import './components.css'

export default class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            email: ''
        }
    }

    clearForm = () => {
        document.getElementById("newForm").reset();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
    }
    
    handleClick = (e) => {
         e.preventDefault();
        const id = this.state.id;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const city = this.state.city;
        const state = this.state.state;
        const email = this.state.email;
        this.props.createUser({ id, firstName, lastName, city, state, email })   
        this.setState({
            id: this.state.id + 1,
        })
        this.clearForm()
    }

    render() {
        return (
            <form className='card' id='newForm' onSubmit={this.handleClick}>
              <h3>add a new user!</h3>
                <label>first name: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='firstName' placeholder='Jane'></input>
                
                <label>last name: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='lastName' placeholder='Doe'></input>
                
                <label>city: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='city' placeholder='Boston'></input>

                <label>state: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='state' placeholder='Massachusetts'></input>

                <label>email: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='email' placeholder='janedoe@gmail.com'></input> 
                
                <button id='registerBtn' type='submit' onClick={this.handleClick}> submit </button>   
            </form>
        )
    }
}