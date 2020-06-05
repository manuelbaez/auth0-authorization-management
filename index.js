const express = require('express')

const app = express()

app.listen(3001, function () {
    console.log('Example app listening on port 80!')
})

app.route('/api').get((request, response) => {
    response.json({ message: "done" })
})