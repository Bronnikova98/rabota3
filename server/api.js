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

const mysql = require("mysql")

const params = {
    host: "localhost",
    user: "root",
    database: "photographer_portfolio",
    password: "21*********a",
}



app.post("/post", urlencodedParser, (request, response) => {
    const connection = mysql.createConnection(params)
    connection.connect()
    // исправить конкатенацию строк
    let sql = "INSERT INTO client_massage (client_name,client_mail, client_text ) VALUES (" + "'" + request.body.name + "'" + ", " + "'" + request.body.mail + "'" + ", " + "'" + request.body.text + "'" + ");"



    connection.query(sql, function (error) {
        if (error) {
            console.log(error)
        }

    })
    connection.end()
    console.log(request.body)
})