import express from 'express';
import connection from './database/db.js';


const app = express();

const PORT =6000;

app.listen(PORT,() => console.log(`Server is running succesfully ${PORT}`));
