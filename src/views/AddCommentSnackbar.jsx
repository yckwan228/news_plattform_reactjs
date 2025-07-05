import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';



function AddCommentSnackbar({ open, handleClose }) {

    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (

        <div className='snackbar_addComment'>
            <Snackbar className='addComment'
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                action={action}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    你已加一則留言
                </Alert>

            </Snackbar>    
        </div>

    );
}

export default AddCommentSnackbar;