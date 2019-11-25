console.log('client side js file');

//fetch is supported by browsers but not by nodejs
/**
 * fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})
 */

fetch('http://localhost:3001/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        } else{
            console.log(data.forecast);
        }
        
    })
})

// const weatherForm = document.querySelector('form') //return js conversion of HTML form object which we can manipulate
// const search = document.querySelector('input');
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'content of first message'
// //because of this need to change location of script tag in html. this bcoz script must run only after 
// // whole form has rendered else it will not find form and following will crash
// weatherForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let location = search.value;

//     console.log(location);
// })

/**
 * as soon as search is clicked the form is submitted and by default behavior of browser 
 * when form is submitted the page is refreshed thus we see 'testing' for split second
 */



//watch 57 after 8 mins to complete challenge, 58 afer 12