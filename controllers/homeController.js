
let self = {}

self.contenido = [{
            imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Real-Madrid-Toni-Kroos-Manchester-United-transfer-921997.jpg',
            titulo: 'Toni Kroos',
            id:'1',
            like: 0
            
        },
        {
            imagen: 'http://dailycannon.com/wp-content/uploads/2017/03/lukas-podolski-germany.jpg',
            titulo: 'Lukas Podolski',
            id:'2',
            like:0
        },
        {
            imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Gareth-Bale-961897.jpg',
            titulo: 'Gareth Bale',
            id:'3',
            like:0

        },
        {
            imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-933021.jpg',
            titulo: 'Lionel Messi',
            id:'4',
            like:0

        }
    ]

    self.home = function(req,res){
        res.render('index', {
        contenido: self.contenido
    })
    };
    


self.like = function(req, res){
    let like = 0
    for (var i = 0; i < self.contenido.length; i++) {
    if (self.contenido[i].id == req.body.id){
     self.contenido[i]['like'] = parseInt(self.contenido[i]['like']) + 1
     like = self.contenido[i]['like']
        }
    }
 
 res.json({
    like: like
 })

}


/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = self;