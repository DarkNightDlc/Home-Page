function findOffset(element) {
    var top = 0, left = 0;
  
    do {
      top += element.offsetTop  || 0;
      //left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);
  
    return {
      top: top,
      //left: left
    };
  }
  
  window.onload = function () {
    var stickyHeader = document.querySelector('header');
    var headerOffset = findOffset(stickyHeader);
    var newsMain = document.querySelector('.main-news');
  
    window.onscroll = function() {
      // body.scrollTop is deprecated and no longer available on Firefox
      var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (bodyScrollTop > headerOffset.top) {
        stickyHeader.classList.add('fixed');
      } else {
        stickyHeader.classList.remove('fixed');
      }
    };
  };

const menu_hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_header');

menu_hamburger.addEventListener('click', () => menu.classList.toggle('active'));


const btn_open_search = document.querySelector('.btn_search_open');
const btn_close_search = document.querySelector('.btn_search_close');
const search = document.querySelector('.searche_bar');
const logo = document.querySelector('.logo');

btn_open_search.addEventListener('click', () => {
  search.classList.add('cell_mode_active');
  menu.classList.add('invisible');
  logo.classList.add('invisible');
});
btn_close_search.addEventListener('click', () => { 
  search.classList.remove('cell_mode_active');
  menu.classList.remove('invisible');
  logo.classList.remove('invisible');
});