import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const USER_DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Billy Bobbs Gator Farm and Petting Zoo',
        description: 'Great place to wrestle a gator, pet a gator, ride a gator... pretty much anything goes.',
        creator: 'u1',
        address: '100 Swamp Britches Ln',
        location: {
            lat: 30.4457497,
            lng: -91.1871759
        },
        image: 'https://images.unsplash.com/photo-1520542099817-0d19524eccca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'p2',
        title: 'Ricky Roys Gator Farm and Petting Zoo',
        description: 'Great place to wrestle a gator, pet a gator, ride a gator... pretty much anything goes.',
        creator: 'u2',
        address: '100 Swamp Britches Ln',
        location: {
            lat: 30.4457497,
            lng: -91.1871759
        },
        image: 'https://images.unsplash.com/photo-1520542099817-0d19524eccca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
];

const UpdatePlace = props => {
    const placeID = useParams().placeID;
    const [loading, setLoading] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        }, false
    )

    const placeIdentifier = USER_DUMMY_PLACES.find(place => place.id === placeID);

    useEffect(() => {
        setFormData(
            {
                title: {
                    value: placeIdentifier.title,
                    isValid: true
                },
                description: {
                    value: placeIdentifier.description,
                    isValid: true
                }
            }, true
        )
        setLoading(false);
    }, [placeIdentifier, setFormData])




    if (!placeIdentifier) {
        return <div className="center">
            <h2>Could not find place.</h2>
        </div>
    }

    const updatePlaceSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if(loading){
        return <div className="center"><h2>Loading ....</h2></div>
    }

    return <form className='place-form' onSubmit={updatePlaceSubmitHandler}>
        <Input
            id='title'
            type='text'
            label="Change Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialIsValid={formState.inputs.title.isValid}
        />
        <Input
            id='description'
            type='textarea'
            label="Change Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter a valid description.'
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialIsValid={formState.inputs.description.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>Update Place</Button>
    </form>
}

export default UpdatePlace;