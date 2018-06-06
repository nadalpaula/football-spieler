const homeController = require('./homeController.js')
let self = {}

const contenido = homeController.contenido


self.add = function(req, res, next){
const saraza = contenido.length
const buscarId = contenido[saraza - 1].id


contenido.unshift({
	imagen: req.body.imagen, //siempre se refiere al AJAX
	titulo:req.body.titulo,
	id:buscarId + 1,
	like:0
})
contenido.rever
res.json(contenido)
} 

module.exports = self;