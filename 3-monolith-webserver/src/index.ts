//MJS => MOdules JS Es Modules
import express from 'express';

// créer l'objet serveur web
const app = express();

//configurer serveur, mes traitements
app.get('/', (req, res) =>{
    res.send('Hello future');
})

//lacer le serveur (l'app)
app.listen(3000, () =>{
    console.info('App started on 3000');
});

