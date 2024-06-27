const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv/config');
app.use(cors());
app.options('*', cors());

app.use(express.json());

const api = process.env.API_URL;
const password = process.env.DB_CONNECT


mongoose.connect(password)
.then(() => {
    console.log("Database Connected!")
})
.catch((err) => {
    console.log(err)
})

const productRouter = require('./routers/products.router');
const categoryRouter = require('./routers/category.router');


app.use(`${api}/products`, productRouter);
app.use(`${api}/category`, categoryRouter);
app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000")
})