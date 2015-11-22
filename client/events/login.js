Template.login.events({
  'submit form': function(e) {
    e.preventDefault();

    var username = e.target.username.value;
    var password = e.target.password.value;

    Meteor.call('login', username, password, function(error, response) {
      if (error) {
        Session.set('errors', 'Invalid username or password');
      } else if (response.hasOwnProperty('errors')) {
        Session.set('errors', response.errors);
      } else {
        localStorage.setItem('auth_token', response.auth_token);
        Session.set('logged_in', !!localStorage.getItem('auth_token'));
        Router.go('home');
      }
    });
  }
});
