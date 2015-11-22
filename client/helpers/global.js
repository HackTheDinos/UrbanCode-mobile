Meteor.startup(function() {
  Session.set('logged_in', !!localStorage.getItem('auth_token'));
});

Handlebars.registerHelper('logged_in', function() {
  return Session.get('logged_in');
});
