var menuOpen = document.querySelector('.menu__icon');
var menuClose = document.querySelector('.menu__icon__close');
var menuList = document.querySelector('.header__menu__list');
var homeTitle = document.querySelector('.header__title');
var logoTitle = document.querySelector('.header__menu__logo__title-script');
var logoImg = document.querySelector('.header__menu__logo__img-script');
var headerLine = document.querySelector('.header__line');



menuOpen.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: none');
	menuList.setAttribute('style', 'display: flex');
	homeTitle.setAttribute('style', 'top: 10px');
	logoTitle.setAttribute('style', 'margin: -55px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: none');
	menuClose.classList.remove('visually-hidden');
	headerLine.classList.add('visually-hidden');
	menuClose.setAttribute('style', 'left: 0px');
});

menuClose.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: block');
	menuList.setAttribute('style', 'display: none');
	homeTitle.setAttribute('style', 'top: -230px');
	logoTitle.setAttribute('style', 'margin: 5px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: block');
	menuClose.classList.add('visually-hidden');
	headerLine.classList.remove('visually-hidden');
	menuClose.setAttribute('style', 'left: -406px');
});



if (window.innerWidth <= 992) {
	menuOpen.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: none');
	menuList.setAttribute('style', 'display: flex');
	homeTitle.setAttribute('style', 'top: -80px');
	logoTitle.setAttribute('style', 'margin: -55px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: none');
	menuClose.classList.remove('visually-hidden');
	headerLine.classList.add('visually-hidden');
	menuClose.setAttribute('style', 'left: 0px');
});

menuClose.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: block');
	menuList.setAttribute('style', 'display: none');
	homeTitle.setAttribute('style', 'top: -230px');
	logoTitle.setAttribute('style', 'margin: 5px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: block');
	menuClose.classList.add('visually-hidden');
	headerLine.classList.remove('visually-hidden');
	menuClose.setAttribute('style', 'left: -406px');
});

} else {};




if (window.innerWidth <= 768) {
	menuOpen.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: none');
	menuList.setAttribute('style', 'display: flex');
	homeTitle.setAttribute('style', 'top: -180px');
	logoTitle.setAttribute('style', 'margin: -55px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: none');
	menuClose.classList.remove('visually-hidden');
	headerLine.classList.add('visually-hidden');
	menuClose.setAttribute('style', 'left: 0px');
});

menuClose.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: block');
	menuList.setAttribute('style', 'display: none');
	homeTitle.setAttribute('style', 'top: -230px');
	logoTitle.setAttribute('style', 'margin: 5px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: block');
	menuClose.classList.add('visually-hidden');
	headerLine.classList.remove('visually-hidden');
	menuClose.setAttribute('style', 'left: -406px');
});

} else {};



if (window.innerWidth <= 576) {
	menuOpen.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: none');
	menuList.setAttribute('style', 'display: flex');
	homeTitle.setAttribute('style', 'top: -230px');
	logoTitle.setAttribute('style', 'margin: -55px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: none');
	menuClose.classList.remove('visually-hidden');
	headerLine.classList.add('visually-hidden');
	menuClose.setAttribute('style', 'left: 0px');
});

menuClose.addEventListener('click', function() {
	menuOpen.setAttribute('style', 'display: block');
	menuList.setAttribute('style', 'display: none');
	homeTitle.setAttribute('style', 'top: -230px');
	logoTitle.setAttribute('style', 'margin: 5px 0px 0px 0px');
	logoImg.setAttribute('style', 'display: block');
	menuClose.classList.add('visually-hidden');
	headerLine.classList.remove('visually-hidden');
	menuClose.setAttribute('style', 'left: -406px');
});

} else {};
















// var current_page;
 
// if (window.location.href == "http://yoursite.ru/index1.html") {current_page = document.getElementById('a1');}
// else if (window.location.href == "http://yoursite.ru/index2.html") {current_page = document.getElementById('a2');}
// и т.д.
// else {current_page = document.getElementById('a6');}
 
// current_page.style.borderBottom = "2px solid #676a6c";
 
// var menu_links = document.getElementById('menu').getElementsByTagName('a');
 
// for(var i = 0; i< menu_links.length; i++){
//   menu_links[i].onmouseover = function() {
//    this.style.borderBottom = "2px solid #676a6c"; 
//    if(this!=current_page) {
//      current_page.style.borderBottom = "2px solid transparent";
//    }
//   }
//   menu_links[i].onmouseout = function() {
//    this.style.borderBottom = "2px solid transparent"; 
//    if(this!=current_page) {
//      current_page.style.borderBottom = "2px solid #676a6c";
//    }
//   }
// }