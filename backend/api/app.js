//main entry

require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require('cors');
const port = +process.env.PORT || 2003;

//Routes requirement
const routes = require("./routes/index");

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(
    express.static('./static')
    );
app.use("/", routes);

app.get("/", function (req, res) {
    res.json({ message: "My database" });
});
    
app.use("/", routes);
    



    app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});