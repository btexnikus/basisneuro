import '../imports/startup/accounts-config.js';
import { Meteor } from 'meteor/meteor';
import './login.html';

if (Meteor.isClient) {

	Template.login.rendered = function() {


	
	};

	Template.login.events({
    'submit form': function(e) {
        e.preventDefault();

        var email = e.target.email.value;
        var password = e.target.password.value;
      	Meteor.loginWithPassword(email, password,function(error){
            if(error) {
               alert('123');
            }else{
            	Router.go('/');
            }
        });
     }
 });

}