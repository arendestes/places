import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MIN } from '../../shared/util/validators';

import './NewPlace.css';

const NewPlace = () => {

    const titleInputHandler = useCallback((id, value, isValid) => {

    }, []);

    const descriptionInputHandler = useCallback((id, value, isValid) => {

    }, []);

    return <form className='place-form'>
        <Input
            id='title'
            type='text'
            label='Title'
            element='input'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title.'
            onInput={titleInputHandler} />
        <Input
            id='description'
            type='textarea'
            label='Description'
            element='input'
            validators={[VALIDATOR_MIN(5)]}
            errorText='Please enter a valid description.'
            onInput={descriptionInputHandler} />
    </form>
}

export default NewPlace;