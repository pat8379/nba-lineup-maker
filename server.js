// const data = require('./src/data/top100_NBA');
// console.log(data)
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());
if (process.env.NODE_ENV === "production"){
  app.use(express.static('public'));
}

// Add middware for parsing request bodies here:
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const playersRouter = require('./server/routes/playersServer')
app.use('/player', playersRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

module.exports = app