const { Router } = require('express');
var express = require('express');
var router = express.Router();
var frase = require('./frase');

router.post('/', function(req , res){
    console.log(req.boby);

    let j = new frase({
      
        titulo: req.body.titulo,
        descricao: req.body.descricao
    })
    j.save((err, jog) =>{
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(jog);

    })
})

router.get('/', function(req , res){
    frase.find().exec((err, jog)=>{
        if(err)
        res.status(500).send(err);
    else
        res.status(200).send(jog);
    })
    
})

router.delete('/:_id', function(req , res){
    frase.deleteOne().exec((err, jog)=>{
        if(err)
        res.status(500).send(err);
    else
        res.status(200).send(jog);
    })
})

module.exports = router;
