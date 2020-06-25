import React from 'react';
import UserItem from './UserItem'

import './UserList.css';

const UserList = props => {
    if ( props.items.length === 0 ){
        return <h2>No users at found.</h2>
    }

    return <ul>
        { props.items.map( user => <UserItem 
        key={user.id} 
        id={user.id} 
        name={user.name} 
        image={user.image} 
        NuberPlaces={user.places} /> ) }
    </ul>
}

export default UserList;