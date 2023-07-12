const express=require('express')
const app =express()
console.log(`app.is listeinfg`);
app.listen(9898,()=>{console.log(`server is listening at the port 9898`);})