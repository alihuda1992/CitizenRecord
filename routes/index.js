var express = require('express');
var  passport = require('passport');
var router = express.Router();
var orm = require ("../config/orm");

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL:
  process.env.AUTH0_CALLBACK_URL || '/user'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname,'index'));
});

router.get('/login', passport.authenticate('auth0', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: env.AUTH0_CALLBACK_URL,
  responseType: 'code',
  audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
  scope: 'openid profile'}),
  function(req, res) {
    res.redirect("/");
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  }
);

router.get('/failure', function(req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});


router.post('/api/search', function(req,res) {
  const {zipcode, agency, agent_name, badgeid} = req.body;
  // console.log(zipcode, agency, agent_name, badgeid);
  orm.search(zipcode, badgeid, agency, agent_name, function(data){
    // console.log(data);
    res.json(data);
  });
});

router.post('/api/submit', function(req,res) {
  const {username,zip,incidentdate,badgeid,agency,race,gender,content,sworncheck,agent_name} = req.body;
  orm.submit(username,zip,incidentdate,badgeid,agency,race,gender,content,sworncheck,agent_name, function(data){
    // console.log(data);

  });
});






module.exports = router;
