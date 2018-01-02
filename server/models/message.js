'use strict';

module.exports = function(Message) {

	Message.newmethod = function (name1,name2, cb) {
		// body...
		var date = new Date()
		cb(null, "Hello " + name1 + " and " + name2, date)
	}

	Message.remoteMethod('newmethod', {
	      accepts: [
	  		{arg: 'name1', type: 'string'},
	  		{arg: 'name2', type: 'string'}
	      ],
	      returns: [
	      	{arg: 'greeting', type: 'string'},
	      	{arg: 'date', type: 'date'}
	      ],
	      http: {
	        path: '/newmethod',
	        verb: 'post'
	      },
    });
};
