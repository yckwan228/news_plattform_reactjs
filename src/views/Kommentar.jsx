import React, { useEffect, useState } from 'react';
import { MdCancel, MdDoneAll } from 'react-icons/md'
import { Button2, Comment, Form, Header } from 'semantic-ui-react'

import momoProfil from '/Users/terrykwan/Documents/neues-react-projekt/src/materials/momoProfil.jpeg';
import '../style/Kommentar.css'; // Importieren Sie einen CSS-Style
import CancelIcon from '@mui/icons-material/Cancel';

{ /* Komponente für einzelnen Kommentar */ }

function Kommentar(props) {


    const { comment, comments, setComments, index, showDeleteCommentSnackbar } = props;

    const handleRemove = (evt) => {

        evt.preventDefault();

        fetch(`/api/comments/${comment.id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Nach erfolgreichem Löschen im Backend, aktualisieren Sie den Frontend-Zustand:
                let newComms = [...comments];
                newComms.splice(index, 1);
                setComments(newComms);
                showDeleteCommentSnackbar();  // rufen die Methode von ArticleVorlage.jsx auf
            })
            .catch(error => console.error('Es gab ein Problem mit dem fetch Operation:', error));

    };


    return (

        <div className='single-comment-box'>

            <div className='box-comment'>

                <Comment>
                    {/* Avatar-Bild (ich verwende einen Platzhalter, da Ihr Originalcode keinen Avatar hatte) */}
                    <Comment.Avatar className='profilpic' src={momoProfil} />

                    <Comment.Content>
                        {/* Benutzernamen als Kommentarautor anzeigen */}
                        <Comment.Author className='profilName' as='a'>{comment.userName}</Comment.Author>

                        <Comment.Metadata>
                            {/* Sie können weitere Daten wie das Datum hinzufügen, wenn sie in Ihrem Datenmodell vorhanden sind */}
                            <div className='timeOfComment'>於 {new Date(comment.createdAt).toLocaleString()} 留左個言</div>
                        </Comment.Metadata>

                        {/* Den Kommentartext anzeigen */}
                        <Comment.Text className='comment'>{comment.comment_content}</Comment.Text>

                        <Comment.Actions>
                            {/* Hier können Sie Aktionen wie "Antworten" oder "Entfernen" hinzufügen */}

                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </div>

            <div className='action_btn'>

                <CancelIcon className='remove_btn' id='btn' size={20} onClick={(evt) => handleRemove(evt)} />

            </div>
            
        </div>




    );
}


export default Kommentar;