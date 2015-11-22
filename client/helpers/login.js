Template.login.helpers({
  errors: function() {
    return Session.get('errors');
  }
});

Template.login.destroyed = function() {
  Session.set('errors', null);
};
