Package.describe({
	summary: "reactive event system for Meteor"
});

Package.on_use(function (api) {
	api.use(['coffeescript','deps','underscore'],'client');

  
  api.export('EventHorizon');

	api.add_files([
		'eventHorizon.coffee'
	],'client');
});