import AuthorForm from "./AuthorForm";
import { useState } from "react";
import Author from "./Author";
import { useSelector } from 'react-redux'
import swal from 'sweetalert';

function MainPage() {
    const [authors, setAuthors] = useState([]);
    const author = useSelector(state => state.author.author)

  return (
    <div>
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
                        setAuthors([...authors, author]);
                    }
                })
                return;
            };
            setAuthors([...authors, author]);

            
        }}
      />

        {authors.map( author => {
            return <Author author={author} />
        })}



    
    </div>
  );
}

export default MainPage;