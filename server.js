///////////////////////////////////
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
///////////////////////////////////
const express = require("express")
const app = express()
const PORT = 3000

///////////////////////////////////
// ROUTES 
///////////////////////////////////

app.get("/greeting/:name", (request, response) => {
    response.send(`${request.params.name}! It's so great to see you!`)
})

app.get("/tip/:total/:tipPercentage", (request, response) => {
    response.send("Your tip is $" + (request.params.total * (request.params.tipPercentage / 100)))
})








///////////////////////////////////
// SERVER LISTENER
///////////////////////////////////
app.listen(3000, () => {
    console.log(`listening on ${PORT}`)
})