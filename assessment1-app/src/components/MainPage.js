import AuthorForm from "./AuthorForm";
import { useState } from "react";
import Author from "./Author";
import { useSelector } from 'react-redux'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux'
import { setAuthors } from '../reduxSlice/authorSlice';
import Users from "./Users";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
  
let theme = createTheme();
theme = responsiveFontSizes(theme);

function MainPage() {
    const authors = useSelector(state => state.author.authors)
    const author = useSelector(state => state.author.author)
    const dispatch = useDispatch();

    const showAddSuccess = () => {
        swal(
            'Success',
            'Author added successfully',
            'success'
        );
    }

  return (
    <div id="mainPage">
        <ThemeProvider theme={theme}>
        <Typography variant="h5">Assessment 1</Typography>
        <br />
      <AuthorForm 
        submitAuthor={(e) => {
            e.preventDefault();
            if (!author) {
                swal(
                    'Error',
                    'Please enter an author name',
                    'error'
                );
                return;
            }
            if (authors.includes(author)) {
                // asks user if they are sure to add the author
                swal({
                    title: 'Are you sure?',
                    text: 'This author already exists. Do you want to add it anyway?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                }).then(willAdd => {
                    if (willAdd) {
                        dispatch(setAuthors([...authors, author]));
                        showAddSuccess();
                    }
                })
                return;
            };
            dispatch(setAuthors([...authors, author]));
            showAddSuccess();

            
        }}
      />
        {/* Authors will be shown here */}
        {authors.length === 0 && <Typography variant="h5" color="GrayText">No authors added yet</Typography>}
        {authors.length > 0 && <Typography variant="h5" color="green">Authors added:</Typography>}
        {authors.map( (author, index) => {
            return <Author author={author} index={index} />
        })}

        <Users />



        </ThemeProvider>
    </div>
  );
}

export default MainPage;