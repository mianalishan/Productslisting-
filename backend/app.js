const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const productsRouter = require('./routers/ProductRouter');
connectDb();
const app = express();

const port = 30001;
// Body parser
app.use(express.json());
app.use(cors());
// configure routers
app.use('/product', productsRouter);


app.get('/', (req, res, next) => { res.send('default route'); })


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})