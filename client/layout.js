import '../imports/startup/accounts-config.js';
import { Meteor } from 'meteor/meteor';
import './layout.html';

if (Meteor.isClient) {

	Template.layout.rendered = function() {



		if(Meteor.userId()){
			Router.go('/');
		}else{
			Router.go('/login/');
		}
	};

}