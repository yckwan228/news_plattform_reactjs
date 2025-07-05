import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

function DeleteCommentSnackbar({open, actionClose}) {

    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={actionClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (

        <div className='snackbar_delteComment'>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={actionClose}
                action={action}
                >
                <Alert onClose={actionClose} severity="warning" sx={{ width: '100%' }}>
                    你已移除一則留言
                </Alert>

            </Snackbar>    
        </div>

    );
}

export default DeleteCommentSnackbar;