const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Routes requirement
const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.get("/", function (req, res) {
    res.json({ message: "My database" });
});

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});