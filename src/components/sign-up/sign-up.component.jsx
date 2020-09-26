import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword) {
            alert("Password not matched");
            return;
        }

        try {
            const {user } = await auth.createUserWithEmailAndPassword(email,  password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch( error) {
            console.log(error);
        }
    }

    handleChange = async event => { 
        const {name, value} = event.target;
        this.setState({ [name]: value});
    }

    render() {

        const {displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h1 className="title">I do not have a account</h1>
                <span>Sign up with your email and password</span>
                <form name="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='name'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={this.handleChange}
                    required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;