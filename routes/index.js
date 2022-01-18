import express from 'express';
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send('hello form express!');
})

router.get('/baek', (req, res) => {
    res.send(`This is Baek's page`);
})

router.get('/joe', (req, res) => {
    res.send(`This is Joe's page`);
})

router.get('/john', (req, res) => {
    res.send(`This is john's page`);
})

// export ther router add make it available to app.js
export default router;