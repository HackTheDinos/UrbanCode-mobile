// var API_DOMAIN = 'http://localhost:3000';
var API_DOMAIN = 'http://635c75e6.ngrok.com';
var API_PREFIX = API_DOMAIN + '/api/v1';

Meteor.startup(function() {
  Meteor.methods({
    login: function(username, password) {
      var response = HTTP.post(API_PREFIX + '/sessions', {
        params: {
          username: username,
          password: password
        }
      });

      return JSON.parse(response.content);
    },

    register: function(username, password) {
      var response = HTTP.post(API_PREFIX + '/users', {
        params: {
          username: username,
          password: password
        }
      });

      return JSON.parse(response.content);
    },

    logout: function(auth_token) {
      var response = HTTP.del(API_PREFIX + '/sessions/' + auth_token);
      return response;
    },

    submit_fossil: function(description, location, date, photo, auth_token) {
      var response = HTTP.post(API_PREFIX + '/submissions', {
        params: {
          description: description,
          location: location,
          date: date,
          photo: photo,
          auth_token: auth_token
        }
      });
      return JSON.parse(response.content);
    }
  });
});
