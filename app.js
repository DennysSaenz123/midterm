/*
 * Import the express module
 */
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3001;

//Enable static file serving 
app.use(express.static('public'));

//Define out main root ('/')
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Submit order route 
app.post('/submit-req', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thanks.html`);
});

/*
 * Start the server and tell it listen on the port
 * specified above. Note the backticks!
 */
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});
