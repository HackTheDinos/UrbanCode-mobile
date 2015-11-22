Template.newSubmission.events({
  'click #take-photo': function(e) {
    e.preventDefault();

    MeteorCamera.getPicture({}, function(error, data) {
      Session.set('photo', data);
    });
  },

  'submit form': function(e) {
    e.preventDefault();

    var description = e.target.description.value;
    var location = e.target.location.value;
    var date = e.target.date.value;
    var photo = document.querySelector('img').src;
    var authToken = localStorage.getItem('auth_token');

    Meteor.call('submit_fossil', description, location, date, photo, authToken, function(error, response) {
      if (error) {
        Session.set('errors', 'There was an error processing your submission. Please try again later.');
      } else if (response.hasOwnProperty('errors')) {
        Session.set('errors', response.errors);
      } else {
        alert('Your fossil has been submitted!');
        Router.go('home');
      }
    });
  }
});
