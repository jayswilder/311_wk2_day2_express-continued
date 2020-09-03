const express = require("express");
var bodyParser = require("body-parser");

const commentsRouter = require("./routes/comments");
const contactsRouter = require("./routes/contacts");
const vehiclesRouter = require("./routes/vehicles");
const productsRouter = require("./routes/products");

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json());

app.use(commentsRouter);
app.use(contactsRouter);
app.use(vehiclesRouter);
app.use(productsRouter);

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});