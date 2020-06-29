import React from 'react';
import { useParams } from 'react-router-dom'

import PlacesList from '../components/PlacesList';

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
        id: 'p1',
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
]

const UserPlaces = props => {

    const userID = useParams().userID;
    const loadPlaces = USER_DUMMY_PLACES.filter(place => place.creator === userID);

    return <PlacesList items={loadPlaces} />
}

export default UserPlaces;