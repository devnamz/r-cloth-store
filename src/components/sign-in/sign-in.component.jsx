import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
 
class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState ({ [name]: value });
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required/>

                    <FormInput name="password" type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required/>
                    <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {' '}
                        Sign in With Google{' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
