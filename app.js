import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello form express!');
})

// after / => path to other page eg. http://localhost:3000/joe 
app.get('/baek', (req, res) => {
    res.send(`This is Baek's page`);
})

app.get('/joe', (req, res) => {
    res.send(`This is Joe's page`);
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}/`);
});