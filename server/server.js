require('../server/config/config');
const express = require('express'),
    app = express()
    bodyParser = require('body-parser');
    

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('get usuario');
})

.post('/usuario', function(req, res) {
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            msg: 'El nombre es necesario'
        });
    }else{
        res.json({ 
            persona: body
        });
    }
    
})

.put('/usuario/:id', function(req, res) {

    let idUsuario = req.params.id;
    res.json({
        idUsuario
    });
})

.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})

.listen(process.env.PORT, () => {
    console.log(`Corriendo en el puerto ${process.env.PORT}`);
});