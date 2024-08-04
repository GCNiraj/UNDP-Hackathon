const express = require("express")

const app = express()

/* Starting the server on port 4001 */
const port = 4001
app.listen(port, () => {
    console.log(`App running on port ${port} ..`)
})