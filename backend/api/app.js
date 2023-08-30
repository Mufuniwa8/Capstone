//main entry

const express = require("express");
const app = express();
const cors = require('cors');
const port = +process.env.PORT || 5000;

//Routes requirement
const routes = require("./routes");


app.use(express.json());
app.use(cors());

app.use(
    express.static('./static')
    );
app.use("/", routes);

app.get("/", function (req, res) {
    res.json({ message: "My database" });
});
    
    app.use("/", routes);
    
    // app.use(
    //     express.modules('./models')
    // )
    
    app.listen(port, () => {
        console.log(`Sever is running on port ${port}`);
    });