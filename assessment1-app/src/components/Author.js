import { FormControl, Button, FormLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setAuthor, setAuthors } from '../reduxSlice/authorSlice';
import swal from 'sweetalert';


function Author(author) {
    const [edit, setEdit] = useState(false);
    const [newAuthor, setNewAuthor] = useState(author.author);
    const dispatch = useDispatch();
    const authors = useSelector(state => state.author.authors)

    return (
        <div>
            {edit 
            ? 
            <TextField size='small' value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} /> 
            : 
            <span>{author.author}</span>
            }
            <Button onClick={
                () => {
                    if (edit) {
                        // save the new author name
                        let newAuthors = [...authors];
                        newAuthors.splice(author.index, 1, newAuthor);
                        dispatch(setAuthors(newAuthors));

                    }
                    setEdit(!edit);
                }
            }>
                {edit ? 'Save' : 'Edit'}
            </Button>
            
            <Button onClick={
                () => {
                    swal({
                        title: 'Are you sure?',
                        text: `Delete the author: ${author.author}`,
                        icon: 'warning',
                        buttons: true,
                        dangerMode: true,
                    }).then(willDelete => {
                        if (willDelete) {
                            let newAuthors = [...authors];
                            newAuthors.splice(author.index, 1);
                            dispatch(setAuthors(newAuthors));
                            swal(
                                'Success',
                                `${author.author} deleted successfully`,
                                'success'
                            );
                        }
                    })
                }
            }>
                Delete
            </Button>
        </div>
    );
}

export default Author;