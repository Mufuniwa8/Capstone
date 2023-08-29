const express = reuire("express");
const app = express();
const port = process.env.PORT || 3000;

//Routes requirement
const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);