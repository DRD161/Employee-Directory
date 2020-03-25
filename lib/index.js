'use strict';

var url =
  'https://randomuser.me/api/?inc=picture,name,email,phone,location&results=24';

axios.get(url).then(function(response) {
  var data = response.data.results;
  var userData = data.map(function(user) {
    return user;
  });
  console.log(userData);

  userData.forEach(function(user) {
    // console.log(user);
    var createUser =
      '\n        <div>\n            <img src="' +
      user.picture.large +
      '" alt="user image" class="user-image">\n            <h1 class="user-name">' +
      user.name.first +
      ' ' +
      user.name.last +
      '</h1>\n            <p class="user-email">' +
      user.email +
      '</p>\n            <div id="wrapper">\n                <p class="user-phone">' +
      user.phone +
      '</p>\n                <p class="user-location">' +
      user.location.city +
      '</p>\n            </div>\n        </div>\n        ';
    document.getElementById('main').innerHTML = createUser;
  });
});
