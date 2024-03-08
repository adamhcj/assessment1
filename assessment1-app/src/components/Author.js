import { FormControl, Button, FormLabel, TextField, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setAuthor, setAuthors } from '../reduxSlice/authorSlice';
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


function Author(author) {
    const [edit, setEdit] = useState(false);
    const [newAuthor, setNewAuthor] = useState(author.author);
    const dispatch = useDispatch();
    const authors = useSelector(state => state.author.authors)

    return (
        <div className='authorDiv'>
            {edit 
            ? 
            <TextField size='small' value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} /> 
            : 
            <span className='authorSpan'>{author.author}</span>
            }
            <IconButton onClick={
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
                {edit ? <SaveIcon /> : <EditIcon />}
            </IconButton>
            
            <IconButton 
            onClick={
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
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default Author;