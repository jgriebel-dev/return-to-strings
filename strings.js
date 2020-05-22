const noun = prompt('select a noun');
const adj = prompt('Select an adjective');
const verb = prompt('Select a verb');

const phrase = `<p>There was once a cool ${noun}. He was a great ${adj} especially when he was doing ${verb}</p>`


document.querySelector('main').innerHTML = phrase;