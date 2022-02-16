import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className='sign-in'>

            <h2 className='title'>I already have an account</h2>
            <span>Sign in with you email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email" 
                    name='email' 
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required
                    
                />

                <FormInput 
                    type="password" 
                    name='password' 
                    value={this.state.password}
                    label='password'
                    handleChange={this.handleChange}
                    required
                    
                />

                <CustomButton type="submit">Sign In</CustomButton>
            </form>
            </div>
        )
    }
}