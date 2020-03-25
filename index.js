var url =
  'https://randomuser.me/api/?inc=picture,name,email,phone,location&results=24';

axios.get(url).then(function(response) {
  var data = response.data.results;
  var userData = data.map(function(user) {
    return;
  });
  console.log(userData);

  // userData.forEach(function(user) {
  //   // console.log(user);
  //   var createUser = `
  //       <div>
  //           <img src="${user.picture.large}" alt="user image" class="user-image">
  //           <h1 class="user-name">${user.name.first} ${user.name.last}</h1>
  //           <p class="user-email">${user.email}</p>
  //           <div id="wrapper">
  //               <p class="user-phone">${user.phone}</p>
  //               <p class="user-location">${user.location.city}</p>
  //           </div>
  //       </div>
  //       `;
  //   document.getElementById('main').innerHTML = createUser;
  // });
});
