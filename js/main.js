//Navigation menu

let btnMenu = document.querySelector('.btn__mobile'),
    menuList = document.querySelector('.navigation__list');

btnMenu.addEventListener("click", mobileMenu);

function mobileMenu () {
  btnMenu.classList.toggle("active");
  menuList.classList.toggle("navigation__list--active");
}

let navLink = document.querySelectorAll('.navigation__list-item');

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu () {
  btnMenu.classList.remove("active");
  menuList.classList.remove("navigation__list--active");
}


$(document).ready(function(){
  //Slick slider
  //main settings
 /*$('.slider').slick({
    infinite: true,
    dots: true,
    /*prewArrow: '<div class="news__slider-p">&#8249;</div>',
    nextArrow: '<div class="news__slider-next">&#8250;</div>',
    appendArrows: $('.news__slider-arrows'),
    appendDots: $('.slider-dots'),*/
    /*autoplay: true,*/
    /*autoplaySpeed: 4000,
    mobileFirst: true 
  });*/

  let slickOptions = {
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  // section slider
  $('.slider__news').slick($.extend({
    
    appendDots: $('.slider__news-dots'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
  }, slickOptions));

  //header slider
  $('.slider__header').slick($.extend({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $('.slider__header-dots'),
  }, slickOptions));

  //Fancybox
  $('.gallery__photo').fancybox({
    buttons: [
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    animationEffect: 'zoom-in-out',
    animationDuration: 800,
    transitionEffect: 'tube',
    transitionDuration: 1000,
  });
});

  //Map
function initMap() {

  let map, coords, styles, marker, image;

  coords = {
    lat: 40.6776061, 
    lng: -73.9323518
  }

  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

    map = new google.maps.Map(document.getElementById("map"), {
      center: coords,
      zoom: 15,
      styles: styles,
      disableDefaultUI: true,
      zoomControl: true,
      streetViewControl: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "satellite"],
      },
    });

  image = './images/marker.png',

  marker = new google.maps.Marker({
    position: coords,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Hello!",
    icon: image,
  });
}
  
  window.initMap = initMap;

  // Form validation
  let form = document.forms["form"],
      inputsForm = document.querySelectorAll('.input__form'),
      inputEmail = document.getElementById('email'),
      inputName = document.getElementById('name');

form.addEventListener('submit', formSend);

function formSend(e) {
  e.preventDefault();

let nameValue = inputName.value,
    emailValue = inputEmail.value;

  inputsForm.forEach(function (input) {
    if (input.value === '') {
        input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if(!validateEmail(emailValue)) {
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }
};

function validateEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};