import React, { useEffect, useState } from 'react';
import User from './User';

function Users() {

    const [users, setUsers] = useState([])

    // fetch users from jsonplaceholder
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])


    return (
    <div>
        <h2>Users</h2>
        {users.map(user => (
            <User passedUser={user} />
        ))}

    </div>
    )
}

export default Users;