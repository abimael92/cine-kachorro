const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./database/config/keys");
const bodyParser = require("body-parser");
const movieRoute = require("./routes/movies");
const genreRoute = require("./routes/genres");
const userRoute = require("./routes/users");


/**
* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
* See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/

mongoose.connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true, useUnifiedTopology: true }).
    catch(error => handleError(error));



const app = express();

//To prevent CORS errors
app.use(cors());

//Connecting mongoDB

// console.log(databaseConfig);
// mongoose.connect(databaseConfig, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

//Checking the connection to db
var db = mongoose.connection;
db.once("open", () => console.log("Mongo Database is connected now!"));
db.on("error", console.error.bind(console, "connection error:"));

app.use(express.static("./uploads"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute); //cache
app.use("/api/users", userRoute);

//Serve our static asset
app.use(express.static("./frontend"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "./public/index.html"));
});

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;