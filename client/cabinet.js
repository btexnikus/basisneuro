import '../imports/startup/accounts-config.js';
import { Meteor } from 'meteor/meteor';
import './cabinet.html';

if (Meteor.isClient) {

	Template.cabinet.rendered = function() {

		if(Meteor.userId()){
			Router.go('/');
		}else{
			Router.go('/login/');
		}
	};

}