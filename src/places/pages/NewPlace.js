import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';

import './NewPlace.css';


const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputID in state.inputs) {
                if (inputID === action.inputID) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputID].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            inputID: id,
            value: value,
            isValid: isValid
        })
    }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the back end once that is running
    };

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input
            id='title'
            type='text'
            label='Title'
            element='input'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title.'
            onInput={inputHandler} />
        <Input
            id='description'
            type='textarea'
            label='Description'
            element='input'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter a valid description.'
            onInput={inputHandler} />
        <Input
            id='address'
            type='text'
            label='Address'
            element='input'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid address.'
            onInput={inputHandler} />
        <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
}

export default NewPlace;
