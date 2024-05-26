
$('.products-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  menuBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  menuBar.classList.remove('active');
}

let menuBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  menuBar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
}


let dropdownNav = document.querySelector('.dropdown');

document.querySelector('#dropdown').onclick = () => {
  dropdownNav.classList.toggle('active');
  menuBar.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
}


let sidebar = document.querySelector('aside');

let leftBtn = document.querySelector('#left-toggle');

let rightBtn = document.querySelector('#right-toggle');


document.querySelector('#left-toggle').onclick = () => {
  sidebar.style.left = '0';
  leftBtn.style.display = 'none';
  rightBtn.style.display = 'inline-block';
}

document.querySelector('#right-toggle').onclick = () => {
  sidebar.style.left = '-110%';
  leftBtn.style.display = 'inline-block';
  rightBtn.style.display = 'none';
}


