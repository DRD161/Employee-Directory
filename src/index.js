const url =
  'https://randomuser.me/api/?inc=picture,name,email,phone,location&results=24';

axios.get(url).then(response => {
  const data = response.data.results;
  var userData = data.map(user => {
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
  document.getElementById('card-row').innerHTML = userData.join('');
});

const handleOpen = () => {
  document.getElementById('mobile-menu').style.width = '100%';
};

const handleClose = () => {
  document.getElementById('mobile-menu').style.width = '0';
};

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 20, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
