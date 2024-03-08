import { FormControl, Button, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setAuthor } from '../reduxSlice/authorSlice';
import swal from 'sweetalert';

function AuthorForm({ submitAuthor }) {
    const dispatch = useDispatch();


    return (
        <form onSubmit={submitAuthor}>
        {/* <FormLabel htmlFor="author">Author Name</FormLabel> */}
        <TextField 
        id='author' 
        size='small' 
        label='Author Name'
        name='author'
        onChange={(e) => dispatch(setAuthor(e.target.value))}
        ></TextField>

        {/* submit button */}
        <Button type='submit'>Submit</Button>


        </form>
    );
    }

export default AuthorForm;