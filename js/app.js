'use strict';

// SPA
(function () {
  function init() {
      const router = new Router([
          new Route('home', 'home.html', true),                      
          new Route('contact', 'contact.html'),
          new Route('login', 'login.html'),
          new Route('signup', 'signup.html')
      ]);
  }
  init();
}());

// const landing_page = document.getElementById('landing_page');
// landing_page.style.backgroundImage = `url('img/background_lp_dark.svg')`;

// Nav shadow
window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
});


// Navbar button
const nav_button = document.getElementById('nav_button');
const nav_menu_responsive = document.getElementById('nav_menu_responsive');

nav_button.addEventListener('click', () => {
  if(nav_button.classList.contains('fa-align-right')){
    nav_button.classList.remove('fa-align-right');
    nav_button.classList.add('fa-times');
    nav_menu_responsive.classList.remove('hidden');
  } else {
    nav_button.classList.add('fa-align-right');
    nav_button.classList.remove('fa-times');
    nav_menu_responsive.classList.add('hidden');
  }

});



