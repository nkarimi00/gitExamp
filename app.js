const express = require('express');

const application = express();

application.get('*', (request,respons, next) => {
    console.log(request.url);

next();
});

// application.get('/api/hello', (request,respons) => {
//     console.log(request.url)
//     respons.status(200); 
//     respons.json("bish");
//     });

application.use('/apiv3', require('./routes/apiv3'));

    application.all('*', (request, respons) => {
        console.log(request.url)
        respons.status(500); 
        respons.json("Hacker, go away");  
    });

const port = 8080
application.listen (port, () => {
console.log('The magic happens at port ' + port)
});