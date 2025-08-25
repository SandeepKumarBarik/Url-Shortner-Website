const express = require('express');
const cors = require("cors"); 
const mongoose = require('mongoose');
const urlRoute = require('./routes/url.js')

const { connectToMongoDb } = require('./connect.js');

const PORT = 8002;
const app = express()

// MongoDb Connection:
connectToMongoDb("mongodb://localhost:27017/shortify")
.then(()=>{
    console.log("MongoDB Connected Successfully!");
})

app.use(cors());

// Middlewares
app.use(express.json());

// Routes
app.use("/url",urlRoute)

app
.get("/url/:shortId", urlRoute)
.get("/url/analytics/:shortId", urlRoute)

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`)
})

// const express = require('express');
// const cors = require("cors"); 
// const mongoose = require('mongoose');
// const urlRoute = require('./routes/url.js');
// const { connectToMongoDb } = require('./connect.js');

// const PORT = 8002;
// const app = express();

// // MongoDb Connection
// connectToMongoDb("mongodb://localhost:27017/shortify")
//   .then(() => {
//     console.log("MongoDB Connected Successfully!");
//   });

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/url", urlRoute); // All /url/* endpoints (create + analytics)
// app.use("/", urlRoute);    // Allow shortId redirect at root ("/abc123")

// app.listen(PORT, () => {
//   console.log(`Server started at PORT: ${PORT}`);
// });
