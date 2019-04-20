var menuToggle = document.querySelector('#site-nav__toggle'),
    siteHeader = document.querySelector('#site-header'),
    menuLinks = document.querySelectorAll('.site-nav__link');
    console.log('ok');

function closeMenu() {
  console.log('closemenu');
  menuToggle.setAttribute('aria-expanded', 'false');
  siteHeader.classList.remove('is-active');
}

menuToggle.addEventListener('click', function(){
  if (siteHeader.classList.contains('is-active')) {
    closeMenu();
  } else {
    siteHeader.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
  }
});

menuLinks.forEach(function(el){
    el.addEventListener('click', closeMenu);
});


