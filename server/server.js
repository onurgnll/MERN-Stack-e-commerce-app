const express = require("express");
const dotenv =  require("dotenv") ;
const router = require("./routers");
const connectDataBase = require('./utils/connectDB') 

const cors = require('cors');
const {errorHandler} = require("./middlewares/errorHandler");
dotenv.config({path: "./options/config.env"})
const app = express();

const port = process.env.PORT;

app.listen(port,() => {
    connectDataBase().then(() => {
        console.log("server started successfully");
        
    })
})
const corsOptions = {
    origin: 'http://localhost:5173', // İzin verilen istek yapan alan (istemci) adresi
    credentials: true, // İzin verilen isteğe cookies ekleme izni
  };

app.use(cors(corsOptions));
app.use(express.json()) 
app.use("/api",router);


app.use(errorHandler);

