import '../imports/startup/accounts-config.js';
import { Meteor } from 'meteor/meteor';
import './login.html';

if (Meteor.isClient) {

	Template.register.rendered = function() {


	
	};

	Template.register.events({
    'submit form': function(e) {
        event.preventDefault();
        var email = $('[name=email_address]').val();
        var password = $('[name=password]').val();
        var password_again = $('[name=password_again]').val();

        if(password == password_again){

          Accounts.createUser({
              email: email,
              password: password
          }, function(error){
              if(error){
                  alert(error.reason);
              } else {
                  Router.go('/');
              }
          });

        }else{
          alert('Passwords do not match!');
        }
     }
 });

}