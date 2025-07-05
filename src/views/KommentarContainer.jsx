import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Kommentar from './Kommentar';
import '../style/KommentarContainer.css'; // Importieren Sie einen CSS-Style
import AddCommentIcon from '@mui/icons-material/AddComment';
import AddCommentSnackbar from './AddCommentSnackbar';
import DeleteCommentSnackbar from './DeleteCommentSnackbar';

{ /* Komponente für Kommentar-Container */ }

function KommentarContainer(props) {

    const { comments, setComments } = props;

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [comm, setComm] = useState({ userName: "", comment_content: "" })

    useEffect(() => {
        fetch('/api/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.error('Es gab ein Problem mit dem fetch-Aufruf:', error.message);
            });
    }, []);

    // fetch hierein, mit Backend zu kommunizieren

    const handleSubmit = (evt) => {

        evt.preventDefault();

        if (comm.userName && comm.comment_content) {

            fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comm),
            })
                .then(response => response.json())  // Promise von Fetch
                .then(newComm => {
                    setComments(prevComments => [...prevComments, newComm]);
                    setComm({ userName: '', comment_content: '' });
                    setOpenSnackbar(true);
                })


                .catch(error => {
                    console.error('Error:', error.message);
                    console.error('Stack:', error.stack);
                });
        }
    };

    const handleChange = (evt) => {

        setComm({ ...comm, [evt.target.name]: evt.target.value })

    }

    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (

        <div className='comments_container'>

            {/* formular Beginn */}

            <form className='input-form' action='handleSubmit' onSubmit={handleSubmit}> {/* Funktion handleSubmit ist aufgerufen wenn geklickt */}

                <input
                    className='task-input task-input-userName'
                    name='userName'
                    type="text"
                    placeholder='用戶名'
                    onChange={handleChange}
                    value={comm.userName} />

                <textarea
                    className='task-input task-input-content'
                    name='comment_content'
                    type="text"
                    placeholder='留個言'
                    onChange={handleChange}
                    value={comm.comment_content} />

                <button className="taskAbgeben" type='submit' >

                    <AddCommentIcon className="task-btn" />

                </button>

                <AddCommentSnackbar open={openSnackbar} handleClose={() => setOpenSnackbar(false)} />
               
            </form >

            {/* formular Ende */}

        </div>

    );
}


export default KommentarContainer;