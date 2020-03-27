const url =
  'https://randomuser.me/api/?inc=picture,name,email,phone,location&results=24';

// Take api response and map results into an array
axios.get(url).then(response => {
  const data = response.data.results;
  var userData = data.map(user => {
    // Return values as markup
    return `
    <div class="user-wrapper">
    <div class="user-card" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-anchor-placement="top-bottom">
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
  // Display data here
  document.getElementById('card-row').innerHTML = userData.join('');
});

// Function to handle mobile nav open
const handleOpen = document
  .getElementById('hamburger')
  .addEventListener('click', () => {
    document.getElementById('mobile-menu').style.width = '100%';
  });

// Function to handle mobile nav close
const handleClose = document
  .getElementById('close-btn')
  .addEventListener('click', () => {
    document.getElementById('mobile-menu').style.width = '0';
  });

// Initialize scroll animations
AOS.init({});
