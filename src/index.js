const url =
  'https://randomuser.me/api/?inc=picture,name,email,phone,location&results=24';

axios.get(url).then(response => {
  const data = response.data.results;
  var userData = data.map(user => {
    return `
    <div class="user-wrapper">
    <div class="user-card">
      <img src="${user.picture.large}" alt="user image" class="user-image">
      <div class="user-info">
        <h1 class="user-name">${user.name.first} ${user.name.last}</h1>
        <p class="user-email">${user.email}</p>
        <div class="user-info-bottom">
          <p class="user-phone">${user.phone}</p>
          <p class="user-location">${user.location.city}</p>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.getElementById('card-row').innerHTML = userData.join('');
  console.log(userData);
});
