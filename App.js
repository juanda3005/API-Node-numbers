const express=require('express');
const app=express();


app.get('/random/:numeroinicial/:numerofinal',(req,res)=>{
    const min=parseInt(req.params.numeroinicial);
    const max=parseInt(req.params.numerofinal);

    if (isNaN(min) || isNaN(max)){
        //si no es un numero:
        res.status(400);
        res.json({error:'Bad request'});
        return;
    }

    //formula numero aleatorio entre dos valores
    const result = Math.floor(Math.random()*(max-min) + min)
 
    //para responder al navegador con variables se debe usar json
   res.json(result);

    
})


app.post('/',(req,res)=>{
    res.send('guardando')
});

app.put('/',(req,res)=>{
    res.send('actualizado')
});

app.delete('/',(req,res)=>{
    res.send('borrado')
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});



