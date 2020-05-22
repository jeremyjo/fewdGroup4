
var unevenContainer = document.getElementsByClassName("uneven");
var unevenChildren = unevenContainer[0].children;
var unevenChildrenCount = unevenChildren.length;
var widths = [];
var updatedGridCSS;

console.log(unevenContainer);
console.log (unevenChildren);
console.log (unevenChildrenCount);

for (var i = 0; i <unevenChildrenCount; i++){
    console.log("start of for loop:")
    console.log ( unevenChildren[i].className );
    if ( unevenChildren[i].className.includes("col-1of12") ){
        widths[i] = 1;
    } else if ( unevenChildren[i].className.includes("col-2of12") ) {
        widths[i] = 2;
    } else if ( unevenChildren[i].className.includes("col-3of12") ) {
        widths[i] = 3;
    } else if ( unevenChildren[i].className.includes("col-4of12") ) {
        widths[i] = 4;
    } else if ( unevenChildren[i].className.includes("col-5of12") ) {
        widths[i] = 5;
    } else if ( unevenChildren[i].className.includes("col-6of12") ) {
        widths[i] = 6;
    } else if ( unevenChildren[i].className.includes("col-7of12") ) {
        widths[i] = 7;
    } else if ( unevenChildren[i].className.includes("col-8of12") ) {
        widths[i] = 8;
    } else if ( unevenChildren[i].className.includes("col-9of12") ) {
        widths[i] = 9;
    } else if ( unevenChildren[i].className.includes("col-10of12") ) {
        widths[i] = 10;
    } else if ( unevenChildren[i].className.includes("col-11of12") ) {
        widths[i] = 11;
    } else if ( unevenChildren[i].className.includes("col-12of12") ) {
        widths[i] = 12;
    }   // if of last else if()
}       // end of for()

updatedGridCSS = widths[0] + 'fr';
for (var i=1; i<unevenChildrenCount; i++){
    updatedGridCSS += ' ' + widths[i] + 'fr';
}

console.log ("updatedGridCSS:", updatedGridCSS);

unevenContainer[0].style.gridTemplateColumns = updatedGridCSS;

// console.log(unevenContainer[0].style.gridTemplateColumns);

// var reload = document.getElementsByTagName("link");
// console.log (reload);
// reload[0].setAttribute('href',"../css/main.css");
