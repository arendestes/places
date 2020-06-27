import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

import './PlacesList.css';

const PlacesList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No places found. Would you like to add a place?</h2>
                <button>ADD PLACE</button>
            </Card>
        </div>
    }

    return <ul className='place-list'>
        {props.items.map(place=> <PlaceItem key={place.id} id={place.id} image={place.image} title={place.title} description={place.description} address={place.address} creatorID={place.creator} coordinates={place.location} />)}
    </ul>
}

export default PlacesList;