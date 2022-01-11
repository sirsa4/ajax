//helper functions

//select element function
function element(select){
    const elem = document.querySelector(select)
    if(elem) {
        return elem;
    }
    throw new Error(`The Element ${select} does not exist`);
}

//create element function
function create(html){
    const crt = document.createElement(html);
    if(html){
        return crt;
    }
}

//html elements
const container = element('.container');
const btn = element('.btn');
const p = create('p');
p.className = 'first-ajax';
console.log(btn);



//button click event
btn.addEventListener('click', ajax);


 