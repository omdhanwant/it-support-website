const sendMailRouter = require('./routes/transfer');
const config = require('config');
const express = require('express');
const debug = require('debug')('app:logs');
const app = express();

// check if secret is set, otherwise terminate the code
if(!config.get('email.user') || !config.get('email.password')) {
    debug('No email credentials set');
    process.exit(1);
}

app.use(express.json()) // to parse/read json body from request

app.use('/itsupport', sendMailRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>  debug(`listening to port ${port}...`) )