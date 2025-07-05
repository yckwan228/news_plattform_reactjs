const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();


// Verwaltung von JSON
app.use(express.json()); // Zum Parsen von JSON im Anfragekörper
app.use(express.static(path.join(__dirname, 'build')));

const commentsFilePath = path.join(__dirname, 'kommentare.json');

const getCommentsFromFile = async () => {
    const commentsData = await fs.readFile(commentsFilePath, 'utf-8');
    return JSON.parse(commentsData);
};

const saveCommentsToFile = async (comments) => {
    await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));
};



// GET-Anfrage fetching
app.get('/api', (req, res) => {        

    res.json({ message: 'Hallo von Express!' });



});

// GET-Anfrage fetching
app.get('/api/comments', async (req, res, next) => {        
    try {
        const comments = await getCommentsFromFile();
        res.json(comments);
    } catch (error) {
        next(error); // Fehler weitergeben an den Fehlerbehandlungs-Middleware
    }
});

app.post('/api/comments', async (req, res, next) => {
    try {
        const newComment = req.body;
        newComment.createdAt = new Date().toISOString();
        
        let comments = JSON.parse(await fs.readFile(commentsFilePath, 'utf-8'));
        const highestId = comments.reduce((maxId, comment) => Math.max(maxId, comment.id), 0);
        newComment.id = highestId + 1;
        
        comments.push(newComment);
        await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));
        
        res.status(201).send(newComment);
    } catch (error) {
        next(error);
    }
});

//Fetching Delete Daten
app.delete('/api/comments/:id', async (req, res, next) => {
    try {
        const commentId = parseInt(req.params.id);
        let comments = await getCommentsFromFile();

        const index = comments.findIndex(c => c.id === commentId);
        if (index !== -1) {
            comments.splice(index, 1);
            await saveCommentsToFile(comments);
            res.status(200).send({ message: "Kommentar gelöscht!" });
        } else {
            res.status(404).send({ message: "Kommentar nicht gefunden!" });
        }
    } catch (error) {
        next(error);
    }
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Error Handling
app.use((err, req, res, next) => {

    console.error(err.stack);
    res.status(500).send({ message: 'Ein interner Fehler ist aufgetreten!' });

});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

