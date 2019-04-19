var menuToggle = document.querySelector('#site-nav__toggle');
var siteHeader= document.querySelector('#site-header');
var menuItems = document.querySelectorAll('.site-nav__list__link');

menuToggle.addEventListener('click', function(){
  if (siteHeader.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    siteHeader.classList.remove('is-active');
  } else {
    siteHeader.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
    //menuItems[0].focus();
  }
});