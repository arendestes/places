import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';

import './Auth.css';




const Auth = () => {

    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }, false
    )


    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the back end once that is running
    };

    return <Card className='authentication'>

        <form onSubmit={authSubmitHandler}>
            <h2>Login Required</h2>
            <hr />
            <Input
                id='email'
                type='email'
                label='Email'
                element='input'
                validators={[VALIDATOR_EMAIL()]}
                errorText='Please enter your email.'
                onInput={inputHandler} />
            <Input
                id='password'
                type='password'
                label='Password'
                element='input'
                validators={[VALIDATOR_MINLENGTH(7)]}
                errorText='Please enter your password.'
                onInput={inputHandler} />
            <Button type='submit' disabled={!formState.isValid}>LOGIN</Button>
        </form>
    </Card>
}
export default Auth;