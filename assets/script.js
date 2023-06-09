const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];

  var arrowRight = document.querySelector('.arrow_right');
  var arrowLeft = document.querySelector('.arrow_left');
  var bannerImg = document.querySelector('.banner-img');
  var dots = document.querySelectorAll('.dot');
  var text = document.querySelector('p');

  var currentIndex = 0;
  var totalSlides = slides.length;

  arrowRight.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % totalSlides;
	updateSlide();
  });

  arrowLeft.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
	updateSlide();
  });

  function updateSlide() {
	bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
	text.innerHTML = slides[currentIndex].tagLine;

	for (var i = 0; i < dots.length; i++) {
	  if (i === currentIndex) {
		dots[i].classList.add('active');
	  } else {
		dots[i].classList.remove('active');
	  }
	}
  }

  updateSlide();