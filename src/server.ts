import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    response.json([
        'Bruno',
        'Menezes',
        'Noronha'
    ]);
})

app.listen(3333);