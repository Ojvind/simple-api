import Express from 'express';

// create an express app
const app = Express();

// add a route that delays response for 3 minutes
app.get('/teeest', (req, res) => {
  setTimeout(() => {
    res.send('done');
  }, 5000)
});


// start the server
const server = app.listen(8080);

// increase the timeout to 4 minutes
server.timeout = 4000;
