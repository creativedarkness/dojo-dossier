const express = require('express');
const axios = require('axios');
const app = express();

const bodyParrser = require('body-parser');
app.use(bodyParrser.static(path.resolve(__dirname, "./../dojo-dossier-react/build")))


app.listen(1337);