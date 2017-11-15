Router.route('/', function () {
   this.layout('layout');
   this.render('cabinet');
});

Router.route('/login/', function () {
  this.layout('layout');
  this.render('login');
});

Router.route('/register/', function () {
  this.layout('layout');
  this.render('register');
});

Router.route('/forgot_password/', function () {
  this.layout('layout');
  this.render('forgot_password');
});