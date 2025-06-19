const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const dotenv = require('dotenv');
dotenv.config();


// app.get('/', (req, res) => {
//     res.send("Hello");
// })

//mongodb connection
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose
.connect(process.env.URI)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const paymentRoute = require('./routes/paymentRoute');

app.use(userRoute);
app.use(productRoute);
app.use(paymentRoute);