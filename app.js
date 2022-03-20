// document.body.children[1].children[0].href = 'https://google.com';

//console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com'; //safest way to get element by id, only focus on id

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';


// anchorElement = document.querySelector('.external-id'); //quetSelector on the other hand, wants any CSS selector .can use tag selector,class selector or id selector. like css selector. put # when wanna call those id. put . when call class
// anchorElement.href = 'https://facebook.com';

 //more example

//  anchorElement = document.querySelectorAll();


//document.getElementById('some-id'): Select a HTML element by its ID (selects only one element, since IDs should be unique)

//document.querySelector('<some-css-selector>'): Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector (e.g. ID selector, tag type selector, class selector, combined selectors etc.)

//document.querySelectorAll('<some-css-selector>'): Selects ALL matching HTML elements that are met / selected by the provided CSS selector

//document.getElementsByClassName('some-css-class'): Selects all HTML elements that have the provided CSS class

//document.getElementsByTagName('tag'): Selects all HTML elements that are of the provided HTML tag type


//inserting New HTML element via JavaScript


// ADD AN ELEMENT
//1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = ' This leads to Google';

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
//1. Select the element that should be removed. example.... to removed h1 element in the HTML
let firstH1Element = document.querySelector('h1');


//2. Removed it!
//firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); //for older browser


//MOVE ELEMENTS

//firstParagraph.parentElement.append(firstParagraph);
//firstParagraph.parentElement.insertBefore(firstParagraph);


//innerHTML

//console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>'; //can contain text(string) or HTML code






