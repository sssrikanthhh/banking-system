const express = require('express');

const connectDB = require('./config/db');
const userRouter = require('./routes/user.routes');
const masterAccountRouter = require('./routes/masterAccounts.routes');
const fixedAccountRouter = require('./routes/fixedAccount.routes');
const app = express();
const PORT = 8000;
app.use(express.json());

connectDB();

app.use('/users', userRouter);
app.use('/masteraccount', masterAccountRouter);
app.use('/fixedaccount', fixedAccountRouter);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});