import express from 'express';
import router from "./routes/index.js";
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

//set up the static assets
app.use(express.static(path.join(__dirname, 'public'))); // href="css/main.css"

// getting routes paramers (like php GET and POST superglobals)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// these are our main routes
app.use('/', router);

// use this route for anything that doesn't match 
app.use(function(req, res) {
    //routes doesn't match, probably a 404 or something 
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '/views/404.html'));
})
app.listen(port, () => {
    console.log(`Server running at port: ${port}/`);
});