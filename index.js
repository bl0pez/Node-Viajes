import express from 'express';
import router from './routes/index.js';

const port = process.env.PORT || 3000;


const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use('/', router);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})