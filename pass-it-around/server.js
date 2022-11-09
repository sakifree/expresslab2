///////////////////////////////////
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
///////////////////////////////////
require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

///////////////////////////////////
// ROUTES 
///////////////////////////////////
app.get("/", (req, res) => {
    res.send(`
        99 bottles of beer on the wall </br> 
        <a href="http://localhost:${PORT}/98">Take one down, pass it around</a>
    `)

})

app.get("/0", (req, res) => {
    res.send(`
        <a href="http://localhost:${PORT}/">START OVER</a>
    `)
})

app.get("/:number_of_bottles", (req, res) => {
    const num = req.params.number_of_bottles
    let newNum = num - 1
    res.send(`
        ${num} bottles of beer on the wall. </br> 
        <a href="http://localhost:${PORT}/${newNum}">Take one down, pass it around</a>
    `)
})




///////////////////////////////////
// SERVER LISTENER
///////////////////////////////////
app.listen(PORT, () => {
    console.log(`server is listening on planet ${PORT}`)
})