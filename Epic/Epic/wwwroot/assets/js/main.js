/**
* Template Name: Vesperr
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// Get the CSS custom properties defined in the :root selector  
function dark_light() {
  if (light == "light") {

    const rootStyles = getComputedStyle(document.documentElement);

    // Set the new CSS custom properties based on the .dark-background selector values  
    const darkBackgroundStyles = {
      '--background-color': '#060606',
      '--default-color': '#ffffff',
      '--heading-color': '#ffffff',
      '--surface-color': '#252525',
      '--contrast-color': '#ffffff',

      '--nav-color': '#444444',  /* The default color of the main navmenu links */
      '--nav-hover-color': '#3498db', /* Applied to main navmenu links when they are hovered over or active */
      '--nav-mobile-background-color': '#fffff', /* Used as the background color for mobile navigation menu */
      '--nav-dropdown-background-color': '#ffffff', /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
      '--nav-dropdown-color': '#444444', /* Used for navigation links of the dropdown items in the navigation menu. */
      '--nav-dropdown-hover-color': '#3498dbl',
    };

    // Update the CSS custom properties with the .dark-background values  
    for (const [property, value] of Object.entries(darkBackgroundStyles)) {
      document.documentElement.style.setProperty(property, value);
    }


    Array.from(document.getElementsByClassName("dark1")).forEach(e => {
      e.src = "assets/img/icons9-sun.gif";
    });

    light = "night"
  } else {

    const rootStyles = getComputedStyle(document.documentElement);

    // Set the new CSS custom properties based on the .dark-background selector values  
    const darkBackgroundStyles = {
      '--background-color': '#ffffff', /* Background color for the entire website, including individual sections */
      '--default-color': '#444444', /* Default color used for the majority of the text content across the entire website */
      '--heading-color': '#222222', /* Color for headings, subheadings and title throughout the website */
      '--accent-color': '#3498db', /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
      '--surface-color': '#ffffff', /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
      '--contrast-color': '#ffffff', /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */

      '--nav-color': '#444444',  /* The default color of the main navmenu links */
      '--nav-hover-color': '#3498db', /* Applied to main navmenu links when they are hovered over or active */
      '--nav-mobile-background-color': '#fffff', /* Used as the background color for mobile navigation menu */
      '--nav-dropdown-background-color': '#ffffff', /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
      '--nav-dropdown-color': '#444444', /* Used for navigation links of the dropdown items in the navigation menu. */
      '--nav-dropdown-hover-color': '#3498dbl',
    };

    // Update the CSS custom properties with the .dark-background values  
    for (const [property, value] of Object.entries(darkBackgroundStyles)) {
      document.documentElement.style.setProperty(property, value);
    }

    Array.from(document.getElementsByClassName("dark1")).forEach(e => {
      e.src = "assets/img/icons8-sun.gif";
    });

    light = "light"
  }
}

var light = "light"
var lang = "fa"
ChengeLang();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ChengeLang() {
  if (lang == "fa") {
    var elementFA = document.getElementsByClassName('fa');
    Array.from(elementFA).forEach(e => {
      var colorEl = e.style.color;
      e.style.color = "transparent";
      e.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

      sleep(500).then(() => {
        e.style.display = "none";
        e.style.color = colorEl;
        e.style.textShadow = "";

        var elementEN = document.getElementsByClassName('en');
        Array.from(elementEN).forEach(ee => {
          ee.style.display = "block";
        });
      });

    });

    lang = "en";
  } else {
    var elementFA = document.getElementsByClassName('en');
    Array.from(elementFA).forEach(e => {
      var colorEl = e.style.color;
      e.style.color = "transparent";
      e.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

      sleep(500).then(() => {
        e.style.display = "none";
        e.style.color = colorEl;
        e.style.textShadow = "";

        var elementEN = document.getElementsByClassName('fa');
        Array.from(elementEN).forEach(e => {
          e.style.display = "block";
        });
      });

    });

    lang = "fa";
  }
}
(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Questions Array
const questions = [
  { question: 'First Name - نام' },
  { question: 'Email - ایمیل', pattern: /\S+@\S+\.\S+/ },
  { question: 'mobile - موبایل' },
  { question: 'Project name - نام پرژه' },
  { question: 'more info - اطلاعات اضافی' },
  { question: 'budget - بودجه پیشنهادی' },
];


// Transition Times
const shakeTime = 100; // Shake Transition Time
const switchTime = 200; // Transition Between Questions

// Init Position At First Question
let position = 0;

// Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS

// Get Question On DOM Load
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Button Click
nextBtn.addEventListener('click', validate);
prevBtn.addEventListener('click', inputback);
// Input Field Enter Click
inputField.addEventListener('keyup', e => {
  if (e.keyCode == 13) {
    validate();
  }
});

// FUNCTIONS
function inputback() {
  formBox.className = '';
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);

  // Store Answer In Array
  questions[position].answer = inputField.value;

  // Increment Position
  position--;
  getQuestion();
}
// Get Question From Array & Add To Markup
function getQuestion() {
  // Get Current Question
  inputLabel.innerHTML = questions[position].question;
  // Get Current Type
  inputField.type = questions[position].type || 'text';
  // Get Current Answer
  inputField.value = questions[position].answer || '';
  // Focus On Element
  inputField.focus();

  // Set Progress Bar Width - Variable to the questions length
  progress.style.width = (position * 100) / questions.length + '%';

  // Add User Icon OR Back Arrow Depending On Question
  prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

  showQuestion();
}

// Display Question To User
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
}

// Hide Question From User
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 'none';
  inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate Field
function validate() {
  // Make Sure Pattern Matches If There Is One
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
    inputFail();
  } else {
    inputPass();
  }
}

// Field Input Fail
function inputFail() {
  formBox.className = 'error';
  // Repeat Shake Motion -  Set i to number of shakes
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

// Field Input Passed
function inputPass() {
  formBox.className = '';
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);

  // Store Answer In Array
  questions[position].answer = inputField.value;

  // Increment Position
  position++;

  // If New Question, Hide Current and Get Next
  if (questions[position]) {
    hideQuestion();
    getQuestion();
  } else {
    // Remove If No More Questions
    hideQuestion();
    formBox.className = 'close';
    progress.style.width = '100%';

    // Form Complete
    formComplete();
  }
}

// All Fields Complete - Show h1 end
function formComplete() {
  const h = document.getElementById("h3") ;
  const h1 = document.createElement('h3');
  h1.classList.add('end');
   
  var tText ;
  if (lang == "fa") {
    tText =  document.createTextNode(
      `اطلاعت شما با موفقیت ثبت شد ، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت`
    )
  } else {
    tText = document.createTextNode(
      `Your information has been successfully registered, our experts will contact you as soon as possible`
    )
  }
  
  h1.appendChild(tText);
  h.appendChild(h1) ;
  h.classList.add("h33")
}
