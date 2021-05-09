const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const frase_controller = require('./frase_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
    'mongodb+srv://db_user:WQM6TIaIyxiMK7kH@cluster0.xlwnp.mongodb.net/com222?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err);
    });

app.use('/frase', frase_controller);

app.listen(3000);
