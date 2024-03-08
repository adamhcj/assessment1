import { FormControl, Button, FormLabel, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setAuthor } from '../reduxSlice/authorSlice';
import swal from 'sweetalert';

function AuthorForm({ submitAuthor }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthor(''));
    }, [])

    return (
        <form onSubmit={submitAuthor}>
        {/* <FormLabel htmlFor="author">Author Name</FormLabel> */}
        <TextField 
        id='author' 
        size='small' 
        label='Author Name'
        name='author'
        fullWidth={true}
        onChange={(e) => dispatch(setAuthor(e.target.value))}
        ></TextField>

        {/* submit button */}
        <Button id='submitAuthorButton' variant='contained' endIcon={<SendIcon />} type='submit'>Submit</Button>


        </form>
    );
    }

export default AuthorForm;