import React, { useEffect, useState } from 'react';
import User from './User';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';

let theme = createTheme();
theme = responsiveFontSizes(theme);


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
        <br />
        <ThemeProvider theme={theme}>
            <Typography color="blue" variant="h5" component="div">
                <GroupIcon fontSize='inherit' sx={{verticalAlign:'middle', marginRight:'0.3vw'}} />
                Users
            </Typography>
        </ThemeProvider>
        {users.map(user => (
            <User passedUser={user} />
        ))}

    </div>
    )
}

export default Users;