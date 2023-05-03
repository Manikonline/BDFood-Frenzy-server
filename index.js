const express= require('express');
const cors=require("cors");
const  datas= require('./datas.json')
const app = express();
app.use(cors());
const port = 5000;


app.get('/', (req, res)=>{
    res.send('Food Frenzy is running...');

})

app.get('/datas',(req, res)=>{
    res.send(datas)
})
app.get('/datas/:id', (req, res)=>{
    const id=req.params.id;
    console.log('i need for id:',id)
    const data=datas.find(d=> d.id==id)||{};
    res.send(data);
})

app.listen(port, ()=>{
    console.log(`Food Frenzy Servera is running on port:${port}`)
})