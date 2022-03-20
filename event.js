//let pharagraphElement = document.body.firstElementChild;
//or
let paragraphElement = document.querySelector('p');

//declare the function first
function changeParagraphText(){
    paragraphElement.textContent = 'You Click! it';
    
}

//must be add function after the type
paragraphElement.addEventListener('click', changeParagraphText); //first parameter is string type....
//second parameter value use function name, changeParagraphText that we create in function.. 
//This is also called "a callback function"



//listening to user input Events

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    //let enteredText = event.data; =>This is different!
    console.log(enteredText); //to see it on browser console
    console.log(event);
}
inputElement.addEventListener('input', retrieveUserInput);