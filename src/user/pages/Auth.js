import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';

import './Auth.css';


const Auth = () => {

    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
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
        auth.login();
        console.log(formState.inputs); //send this to the back end once that is running
    };

    const switchModeHandler = () => {
        if(!isLoginMode){
        setFormData(
            {
                ...formState.inputs,
                name: null
            }, formState.inputs.email.isValid && formState.inputs.password.isValid 
        )} else{
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            )
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return <Card className='authentication'>

        <form onSubmit={authSubmitHandler}>
            
            {isLoginMode ? <h2>Login Required</h2> : <h2>Sign Up</h2>}
            <hr />
            {!isLoginMode &&<Input
                id='name'
                type='text'
                label='Name'
                element='input'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter your name.'
                onInput={inputHandler} />}
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
            {isLoginMode && <Button type='submit' disabled={!formState.isValid}>LOGIN</Button>}
            {!isLoginMode && <Button type='submit' disabled={!formState.isValid}>SIGN UP</Button>}            
        </form>
        <hr />
        {isLoginMode && <React.Fragment>
            <h3>Don't have a places account?</h3>
            <Button inverse onClick={switchModeHandler}>Sign Up</Button>
        </React.Fragment>
        }
        {!isLoginMode && <React.Fragment>
            <h3>Already have a places account?</h3>
            <Button inverse onClick={switchModeHandler}>Login</Button>
        </React.Fragment>
        }

    </Card>
}
export default Auth;