/**


 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
*/
const headLine = document.querySelector('h1');
headLine.style.color = 'yellow';


const sections = (document.querySelectorAll ('section'));
const navBar = (document.getElementById ('navbar__list'));


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function fillTheList () {
  for (section of sections) {
    let link = section.getAttribute ('id');
    let sectionName = section.getAttribute ('data-nav');

    //creating the list inside the ul */
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a class = menu__link href= '#${link}'> ${sectionName} </a>`;
navBar.appendChild (listItem);
  }

};

//creating function to make the section in view fits the screen */
function sectionInViewPort (element) {
  let sectionPos = element.getBoundingClientRect ();
  return (sectionPos.top >= 0);

}
// creating if condition to specify the active class */
function toggleActiveClass() {
  for (section of sections) {
  if (sectionInViewPort(section)) {

    if (!section.classList.contains ('your-active-class')) {
      section.classList.add ('your-active-class',);
    }
  }  else {
    section.classList.remove ('your-active-class');
  }
}
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
fillTheList();

// add event listener to scroll to the required section */
document.addEventListener('scroll', toggleActiveClass);


// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
