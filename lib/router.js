Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/register', {
  name: 'register'
});

Router.route('/submissions/new', {
  name: 'newSubmission'
});
