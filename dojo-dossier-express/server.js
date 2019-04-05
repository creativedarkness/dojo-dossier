const express = require('express');
const axios = require('axios');
const app = express();

const bodyParrser = require('body-parser');
app.use(bodyParrser.static(path.resolve(__dirname, "./../dojo-dossier-react/build")))

//Get All
app.get('/dossiers', (request, response) => {
    axios
        .get('http://5ca6a9fc3a08260014279879.mockapi.io/dossiers')
        .then((res) => {
            console.log("API Response", res);
        })

    // response.json({
    //     payload: dossiers,
    //     status: true
    // })
})

app.post('/dossiers', (request, reqsponse) => {
    console.log("post request",reqeust.body.title)
    dossiers.push({
        title: request.body.title, 
        items: []
    })
});



app.listen(1337);