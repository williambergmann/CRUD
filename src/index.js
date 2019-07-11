import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://william:admin@clusterfrick-oesdf.mongodb.net/test?retryWrites=true&w=majority');


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});