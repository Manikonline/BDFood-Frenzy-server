const express= require('express');
const  datas= require('./datas.json')
const app = express();
const port = 5000;


app.get('/', (req, res)=>{
    res.send('Food Frenzy is running...');

})

app.get('/datas',(req, res)=>{
    res.send(datas)
})

app.listen(port, ()=>{
    console.log(`Food Frenzy Servera is running on port:${port}`)
})