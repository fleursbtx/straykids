function onScroll() {
  if (scrollY > 0) {
    navega.classList.add('scroll')
  } else {
    navega.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .infos, 
  #social,
  #social header,
  #social .card,
  #about,
  #about header,
  #about .content`)
