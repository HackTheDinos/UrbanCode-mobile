Template.layout.events({
  'click #log-out': function(e) {
    e.preventDefault();
    Meteor.call('logout', localStorage.getItem('auth_token'), function(error, response) {
      localStorage.removeItem('auth_token');
      Session.set('logged_in', !!localStorage.getItem('auth_token'));
      Router.go('home');
    });
  }
});
