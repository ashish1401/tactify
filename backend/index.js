const http = require('http');
require('dotenv').config();
const port = process.env.PORT || 3001;

//create application to handle middleware

const server = http.createServer(app);
server.listen(port, function (req, res) {
    console.log("API running live");
});