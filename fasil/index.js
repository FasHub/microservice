const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');

const StartServer = async() => {

  const app = express();
  
  app.use(express.json({ limit: '1mb'}));
  app.use(express.urlencoded({ extended: true, limit: '1mb'}));
  app.use(cors());
  app.use(express.static(__dirname + '/public'));

  app.use("/", async (req, res, next) => {
    res.send({message: "Fasil's Service!"});
  }); 

  app.listen(PORT, () => {
      console.log(`Listening at port ${PORT}`);
  })
  .on('error', (err) => {
      console.log(err);
      process.exit();
  })
}

StartServer();