// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();


/* App Setup */

// Morgan is used for logging
app.use(morgan('combined'));

// body parser is used to parse incoming requests...attempt to parse all requests as json
app.use(bodyParser.json({ type: '*/*' }));
router(app);
/* End App Setup */

/* Server setup  */
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
/* End Server setup  */

console.log('Server listening on port:', port);
