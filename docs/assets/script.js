// Табы в шапке
(() => {
  var tabsBtns = document.querySelector('.tabs-btns');
  var tabsBtnsItem = document.querySelectorAll('.tabs-btns__item');
  var tabsBtnsItemLength = tabsBtnsItem.length;
  var tabsContentTab = document.querySelectorAll('.tabs-content__tab');

  if (tabsBtns) {
    tabsBtns.onclick = (e) => {
      var target = e.target;
      if (!target.classList.contains('tabs-btns__item')) return ;
      for (var i = 0; i < tabsBtnsItemLength; i++) {
        tabsBtnsItem[i].classList.remove('active');
        tabsContentTab[i].classList.remove('active');
      }
      for (var i = 0; i < tabsBtnsItemLength; i++) {
        if (tabsBtnsItem[i] == target) {
          tabsBtnsItem[i].classList.add('active');
          tabsContentTab[i].classList.add('active');
        }
      }
    }
  }
})();
// /Табы в шапке

// Табы в шапке - мобильные
(() => {
var mainContainer = document.querySelector('.mobile-tabs-btns');
var tabsBtns = document.querySelectorAll('.mobile-tabs-btns__item');
var tabsBtnsTtl = document.querySelectorAll('.mobile-tabs-btns__item-ttl');
var wrappers = document.querySelectorAll('.mobile-tabs-content__tab-wrapper');
var listItems = document.querySelectorAll('.mobile-tabs-content__tab');
var tabsBtnsLength = tabsBtns.length;

if (mainContainer) {
  mainContainer.onclick = (e) => {
    var target = e.target;
    if (!target.classList.contains('mobile-tabs-btns__item-ttl')) return ;
    if (target.parentNode.classList.contains('active')) {
      for (var i = 0; i < tabsBtnsLength; i++) {
        if (target === tabsBtnsTtl[i]) {
          tabsBtns[i].classList.remove('active');
          wrappers[i].style.height = '0px';
          return ;
        }
      };
    };
    for (var i = 0; i < tabsBtnsLength; i++) {
      tabsBtns[i].classList.remove('active');
      wrappers[i].style.height = '0px';
    };
    for (var i = 0; i < tabsBtnsLength; i++) {
      if (target === tabsBtnsTtl[i]) {
        tabsBtns[i].classList.add('active');
        wrappers[i].style.height = listItems[i].offsetHeight + 'px';
      }
    };
  }
}
})();
// /Табы в шапке - мобильные

// Кнопка мобильного меню
(() => {
  var button = document.querySelector('.nav-mobile__label');
  var wrapper = document.querySelector('.nav-mobile-wrapper');
  button.onclick = () => {
    wrapper.classList.toggle('active');
    button.classList.toggle('active');
  };
})();
// /Кнопка мобильного меню

// Линии между кругами
var drawLine = () => {
  var blocksContainer = document.querySelector('.why-us__item');
  var blocks = document.querySelectorAll('.why-us__item-article');
  var blocksQuantity = blocks.length;
  var linesQuantity = blocksQuantity - 1;

  var createSvgBlock = () => { // Функция создания контейнера с полосами
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.classList.add('line');
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.classList.add('line__stroke');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', '0');
    line.setAttribute('style', 'stroke:rgb(0,0,0); stroke-width:2');
    svg.appendChild(line);
    blocksContainer.appendChild(svg);
  }

  var drawing = (i) => {
    var parent = document.querySelector('.why-us__item');
    var parentCoords = parent.getBoundingClientRect();
    var parentTop = parentCoords.top;
    var parentLeft = parentCoords.left;

    var pointAll = document.querySelectorAll('.why-us__item-number');
    var point1 = pointAll[i];
    var point1coords = point1.getBoundingClientRect();
    var point1top = point1coords.top;
    var point1left = point1coords.left;

    var point2 = pointAll[i + 1];
    var point2coords = point2.getBoundingClientRect();
    var point2top = point2coords.top;
    var point2left = point2coords.left;
    var point2height = point2coords.height;
    var point2width = point2coords.width;

    if (point2left < point1left) {

      var point1 = pointAll[i];
      var point1coords = point1.getBoundingClientRect();
      var point1height = point1coords.height;
      var point1width = point1coords.width;
      var point1top = point1coords.top;
      var point1left = point1coords.left;

      var point2 = pointAll[i + 1];
      var point2coords = point2.getBoundingClientRect();
      var point2height = point2coords.height;
      var point2width = point2coords.width;
      var point2top = point2coords.top;
      var point2left = point2coords.left;

      var svg = document.querySelectorAll('.line');
      svg[i].style.top = point1top + (point2height/2) - parentTop + 'px';
      svg[i].style.left = point2left + (point2width/2) - parentLeft + 'px';

      var svgWidth = point1left - point2left;
      var svgHeight = point2top - point1top;
      svg[i].style.width = svgWidth + 'px';
      svg[i].style.height = svgHeight + 'px';

      var lineAll = document.querySelectorAll('.line__stroke');
      var line = lineAll[i];
      line.setAttribute('x1', svgWidth);
      line.setAttribute('y1', '0');
      line.setAttribute('x2', '0');
      line.setAttribute('y2', svgHeight);

    } else {

      var svg = document.querySelectorAll('.line');
      svg[i].style.top = point1top + (point2height/2) - parentTop + 'px';
      svg[i].style.left = point1left + (point2width/2) - parentLeft + 'px';

      var svgWidth = point2left - point1left;
      var svgHeight = point2top - point1top;
      svg[i].style.width = svgWidth + 'px';
      svg[i].style.height = svgHeight + 'px';

      var lineAll = document.querySelectorAll('.line__stroke');
      var line = lineAll[i];
      line.setAttribute('x2', svgWidth);
      line.setAttribute('y2', svgHeight);

    };

  };

  for (var i = 0; i < linesQuantity; i++) { // Создаем контейнеры с полосами
    createSvgBlock();
    drawing(i);
  }

};
setTimeout(drawLine, 500);
window.onresize = () => drawLine();
// /Линии между кругами

// Scroll to top
(() => {
  var doc = document.documentElement;
  var scroll = document.querySelector('.scroll-top');

  var docHeight = document.documentElement.clientHeight;
  document.onscroll = function() {
    if(doc.scrollTop > 200) {
      scroll.style.opacity = '1';
      scroll.style.zIndex = '10';
    } else {
      scroll.style.opacity = '0';
      scroll.style.zIndex = '-1';
    }
  };

  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  };
  scroll.onclick = TopscrollTo;

})();
// /Scroll to top

// активный пункт меню
(() => {
  // В шапке
  var activeHeaderMenu = () =>
  {
    var currentUrl = window.location.pathname.split('/'),
    menuAparent = document.querySelectorAll('.nav-desktop .nav__item'),
    menuA = document.querySelectorAll('.nav-desktop .nav__item-a'),
    menuAlength = menuA.length;
    for (var i = 0; i < menuAlength; i++) {
      for (var q = 0; q < currentUrl.length; q++) {
        if (currentUrl[q] === menuA[i].getAttribute('href')) {
          menuAparent[i].classList.add('active');
          break;
        }
      }
    }
  };
  activeHeaderMenu();

  // В футере
  var activeFooterMenu = () =>
  {
    var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.footer__nav .nav__item-a'),
    menuAparent = document.querySelectorAll('.footer__nav .nav__item'),
    menuAlength = menuA.length;
    for (var i = 0; i < menuAlength; i++) {
      for (var q = 0; q < currentUrl.length; q++) {
        if (currentUrl[q] === menuA[i].getAttribute('href')) {
          menuAparent[i].classList.add('active');
          break;
        }
      }
    }
  };
  activeFooterMenu();

  // Мобильное
  var activeMobileMenu = () =>
  {
    var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.nav-mobile__item-a'),
    menuAparent = document.querySelectorAll('.nav-mobile__item'),
    menuAlength = menuA.length;
    for (var i = 0; i < menuAlength; i++) {
      for (var q = 0; q < currentUrl.length; q++) {
        if (currentUrl[q] === menuA[i].getAttribute('href')) {
          menuAparent[i].classList.add('active');
          break;
        }
      }
    }
  };
  activeMobileMenu();
})();
// /активный пункт меню
