const express = require('express');
const cors = require('cors');
const { databaseConnection } = require('./database');
const { PORT } = require('./config');
const { stackHolder } = require('./api');
const { CreateChannel } = require('./utils');


const StartServer = async() => {
const app = express();

await databaseConnection();

app.use(cors());
app.use(express.json({ limit: '100mb'}));
app.use(express.urlencoded({ extended: true, limit: '100mb'}));

const channel = await CreateChannel()

stackHolder(app, channel)

app.listen(PORT, () => 
  console.log(`Listening at port ${PORT}`)
).on('error', (err) => {
    console.log(err);
    process.exit();
});

}

StartServer();