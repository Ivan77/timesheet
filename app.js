var app = require('./app_config.js');

var db = require('./db_config.js');

var validator = require('validator');

app.get('/', function(req, res) {
  //res.end('Servidor ON!');

  new db.User({
    fullname: 'Maria',
    email: 'teste@gmail.com',
    password: '123456',
    created_at: new Date()
  }).save(function (error, user) {
    if(error){
      res.json({error: 'Não foi possível salvar o usuário!'});
    }else{
      res.json(user);
    }
  });
});

app.get('/users', function(req, res) {
  db.User.find({}, function (error, users) {
    if(error){
      res.json({error: 'Não foi possível retornar os usuários'});
    }else{
      res.json(users);
    }
  });
});

app.get('/users/:id', function(req, res) {
  var id = validator.trim(validator.escape(req.param('id')));

  db.User.findById(id, function (error, user) {
    if(error){
      res.json({error: 'Não foi possível retornar o usuário'});
    }else{
      res.json(user);
    }
  });
});

app.post('/users', function(req, res) {
  var fullname = validator.trim(validator.escape(req.param('fullname')));
  var email = validator.trim(validator.escape(req.param('email')));
  var password = validator.trim(validator.escape(req.param('password')));

  //res.json(req.body);
  new db.User({
    'fullname': fullname,
    'email': email,
    'password': password,
    'created_at': new Date()
  }).save(function (error, user) {
    if(error){
      res.json({error: 'Não foi possível salvar o usuário!'});
    }else{
      res.json(user);
    }
  });
});

app.put('/users', function(req, res) {
  var id = validator.trim(validator.escape(req.param('id')));
  var fullname = validator.trim(validator.escape(req.param('fullname')));
  var email = validator.trim(validator.escape(req.param('email')));
  var password = validator.trim(validator.escape(req.param('password')));

  db.User.findById(id, function(error, user) {
    if(fullname){
      user.fullname = fullname;
    }

    if(email){
      user.email = email;
    }

    if(password){
      user.password = password;
    }

    user.save(function (error, user){
      if(error){
        res.json({error: 'Não foi possível salvar o usuário'});
      }else{
        res.json(user);
      }
    });
  })
});

app.delete('/users/:id', function(req, res) {
  var id = validator.trim(validator.escape(req.param('id')));

  db.User.findById(id, function (error, user) {
    if(error){
      res.json({error: 'Não foi possível retornar o usuário'});
    }else{
      user.remove(function (error) {
        if(!error){
          res.json({response: 'Usuário excluído com sucesso!'});
        }
      });
    }
  });
});
//parado em 58 minutos do vídio do VEDOVELLI
//http://www.vedovelli.com.br/web-development/aprenda-em-pouco-mais-de-1-hora-a-desenvolver-web-service-restful-com-nodejs-e-mongodb/
