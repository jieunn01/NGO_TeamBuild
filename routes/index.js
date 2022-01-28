import express from 'express';
const router = express.Router(); 
import * as  path from 'path';

// this is the root route - think of this like index.html
router.get('/', (req, res) => {
    //request server information => sned back response 
    //res.send('hello form express!');
    //send back the index.html file
    //res.sendFile('../views/index.html');
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/baek', (req, res) => {
    res.send(`This is Baek's page`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/joe', (req, res) => {
    res.send(`This is Joe's page`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/john', (req, res) => {
    res.send(`This is john's page`);
})

// export ther router add make it available to app.js
export default router;