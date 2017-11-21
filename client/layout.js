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

	Template.layout.events({

    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login/');
	},

	'click .enlang': function(event){
        event.preventDefault();
        TAPi18n.setLanguage('en');
        $('.chlang').removeClass('select');
        $('.lang1').addClass('select');
        Router.go('/');
	},

	'click .rulang': function(event){
        event.preventDefault();
        TAPi18n.setLanguage('ru');
        $('.chlang').removeClass('select');
        $('.lang2').addClass('select');
        Router.go('/');
	}

	});

}