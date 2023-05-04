const express = require("express")
const app = express();
const db = require("./db");
const dotenv = require("dotenv")
dotenv.config()

const expensesRouter = require("./src/routes/expenses");
const categoriesRouter = require("./src/routes/categories")

const port = process.env.PORT;

db.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
    
app.listen(port, () => {
    console.log("Server running on port " + port);
})

app.use("/expenses", expensesRouter);
app.use("/categories", categoriesRouter);


module.exports = app;