const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/stack-holder', proxy('http://localhost:3001'));


app.listen(3000, () => {
  console.log("Gateway is listening at Port 3000!");
});