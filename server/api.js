const { response } = require("express")
const express = require("express")
const app = express()
const urlencodedParser = express.urlencoded({ extended: false });


app.use(express.urlencoded({
    extended: true
}));


app.use(express.json())


module.exports = {
    path: "/server",
    handler: app,
}


import { Message } from './mysequelize.js'



app.post("/post", urlencodedParser, (request, response) => {

    Message
        .create({
            client_name: request.body.name,
            client_mail: request.body.mail,
            client_text: request.body.text,
        })
        // .then((record) => console.log(record))
        .then((result) => {
            response.status(201).send({ id: result._id })
        })
        .catch((err) => console.error('Connection error: ', err))



})