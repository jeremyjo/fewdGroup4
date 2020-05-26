// <nav>
const nav = document.querySelector('nav');
// navbar <ul>
const navbarUL = document.querySelector('.navbarUL');
// navbar <li>
const navbarLI = document.querySelectorAll('.navbarUL > li');
// hamburger menu
const hamburgerMenu = document.createElement('i');

// media query variable for mobile portrait mode
var mobilePortrait = window.matchMedia("(max-width: 360px)");

// media query variable for mobile landscape mode
var landscape = window.matchMedia("(orientation: landscape)");

// media query variable for table mode
var tablet = window.matchMedia("(min-width: 768px)");

// desktop query variable for desktop mode
var desktop = window.matchMedia("(min-width: 1023px)");

// checks to see if the .navbarUL class is used by the user(programmer)
if (navbarLI.length) {

    if (mobilePortrait.matches) {
        navbarUL.classList.add("vanish");
    }

    if (landscape) {
        navbarUL.classList.toggle('displayGrid');
    }

    // inserts the hamburger menu into the DOM in <nav> before the <ul>
    nav.insertBefore(hamburgerMenu, navbarUL);

    // applies the FontAwesome classes
    hamburgerMenu.className = "fas fa-bars";

    // hamburger menu click functionality
    hamburgerMenu.addEventListener('click', function() {
        navbarUL.classList.toggle('vanish');
        navbarUL.classList.toggle('displayGrid');
    });
}

navbarLI.forEach( function(li) {
    if(li.classList.contains("activeLI")) {
        li.firstChild.classList.add("whiteText");
    }
});

mobilePortrait.addListener(fnMobilePortrait);

// adds listener to the landscape media query. note executes both going to and coming out of landscape mode
landscape.addListener(fnLandscape);

// adds listener to the tablet media query. note executes both going to and coming out of landscape mode
tablet.addListener(fnTablet);

desktop.addListener(fnDesktop);

// ============ function definitions: =================== //
function fnMobilePortrait(event) {
    console.log ("fnMobilePortrait");
    event.preventDefault();

    // defaul mode for navbar will be hidden
    navbarUL.classList.add("vanish");
}


function fnLandscape(event){
    event.preventDefault();
    // viewport is now in landscape mode
    console.log ("fnLandscape");

    // going to/coming from landscape mode
    if (event.matches) {
        console.log ("fnLandscape landscape");
        // display the navbar
        if (navbarUL.classList.contains('vanish') ) {
            navbarUL.classList.remove('vanish');
            navbarUL.classList.add('displayGrid');    
        }   // end of if()

      // going to/coming from portait mode  
    } else {

        // ensures the viewport is smaller than a tablet
        if (window.matchMedia("(max-width: 767px)").matches) {
            console.log ("fnLandscape portrait");

            // do not display the navbar
            if (navbarUL.classList.contains('displayGrid') ) {
                navbarUL.classList.remove('displayGrid');
                navbarUL.classList.add('vanish');
            }   // end of if()

        }       // end of if()

    }       // in of else()       

}           // end of fnLandscape()

function fnTablet(event) {
    event.preventDefault();
    console.log ("funTablet");

    navbarUL.classList.remove("vanish");
    navbarUL.classList.add("displayGrid");
}

function fnDesktop(event) {
    event.preventDefault();
    
}