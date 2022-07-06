import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';

const port = process.env.PORT || 3000;


const app = express();

db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.locals.agenciaViajes = 'Agencia de Viajes';
    next();
})

app.use(express.static('public'));

app.use('/', router);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})