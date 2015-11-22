Template.newSubmission.rendered = function() {
  jQuery('input[name=date]').pickadate();
};

Template.newSubmission.helpers({
  photo: function() {
    return Session.get('photo');
  }
});

Template.newSubmission.destroyed = function() {
  Session.set('photo', null);
};
