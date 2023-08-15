let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".cafe-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
    
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        970: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1650: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      loop: true,
      grabCursor: true,
  });

