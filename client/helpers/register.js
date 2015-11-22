Template.register.helpers({
  errors: function() {
    return Session.get('errors');
  }
});

Template.register.destroyed = function() {
  Session.set('errors', null);
};
