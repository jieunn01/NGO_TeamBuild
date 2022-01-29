import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory reference
// find the global URL using fileURLToPath
// and then turn that into the __dirname (something like Users/Desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// this is the equivalent of index.html
router.get('/', (req, res) => {
    //res.send('Hello from Express! Express is awesome');
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/baek', (req, res) => {
    //res.send(`this is baek's page`);
    res.sendFile(path.join(__dirname, '../views/baek.html'));
})

router.get('/john', (req, res) => {
    res.send(`all about John`);
    //res.sendFile(path.join(__dirname, '../views/index.html'));
})

// this catches broken routes - requests for resources that don't exist
router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

export default router;