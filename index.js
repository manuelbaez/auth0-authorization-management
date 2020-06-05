const express = require('express')

const app = express()

app.listen(80, function () {
    console.log('Example app listening on port 80!')
})

app.route('/').get((request, response) => {
    response.json({ message: "done" })
})