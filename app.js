const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.get("/",(req,res)=>{
    res.send("TEST WITH UPNIWESH");
});

app.listen(port,()=>{
console.log("server is started at port 3000");
});