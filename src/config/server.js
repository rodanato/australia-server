const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

const config     = require('./config');
const router     = require('./router');
// require('./database');

const app        = express();
const port       = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(config.corsOptions));

app.use('/api', router.appRouter);
app.use('/api', router.artistRouter);

app.listen(port);
console.log('API Server running: ' + port);
