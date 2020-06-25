import React from 'react';
import UserList from '../components/UserList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Funky Fingers', 
            places: 5, 
            image: 'https://images.pexels.com/photos/4631966/pexels-photo-4631966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 'u2',
            name: 'Stanky Leg', 
            places: 3, 
            image: 'https://images.pexels.com/photos/3737825/pexels-photo-3737825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]

    return <UserList items={USERS} />
}

export default Users;