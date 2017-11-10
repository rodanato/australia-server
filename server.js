const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const mongoose   = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/usuarios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 8080;

const router = express.Router();