// Import express package
import express  from 'express';
import  getData from './utils.js';
import { readFile } from 'fs/promises';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import config from './config/index.js';
import routes from './routes/index.js'

const __dirname = path.resolve();


const photoData = JSON.parse(
    await readFile(
        new URL('./photoData.json', import.meta.url)
    )
);


// Initialize our app variable by setting it to the value of express()
const app = express();
const upload = multer();

app.use(cors({
    origin: '*'
}))
app.use(upload.none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/email", routes)
// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(photoData));
app.get('/updateData', (req, res) => {
    res.send("Updated Data");
    getData()
});

app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));



app.listen(config.PORT, () =>
  console.log(`Example app listening at http://localhost:${config.PORT}`)
);
 