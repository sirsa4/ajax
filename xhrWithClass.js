//JSON basics

//helper functions

//select element function
function Element(select){
    const elem = document.querySelector(select)
    if(elem) {
        return elem;
    }
    throw new Error(`The Element ${select} does not exist`);
}

//create element function
function create(html){
    const crt = document.createElement(html);
    if(crt){
        return crt;
    }
}

//Json
class MainContainer {
    constructor(element){
        console.log(element);
        const main = element;

        //buttons from html
        this.btn1 = Element('.btn1');
        this.btn2 = Element('.btn2')
       /*  console.log(this.btn1); */

        //customer divs
        this.customer = Element('.customer');
        this.customers = Element('.customers');
        console.log(this.customer);

        //functions for buttons
        this.custom = this.loadCustomer.bind(this);
        console.log(this.custom);


        //button eventlisteners
        //btn1 for customer - single person
        //btn2 for customers - more than 1 person

        this.btn1.addEventListener('click', this.custom);
    }
    loadCustomer(e){
        console.log('Working' + e);
        let div = this.customer;
        //xhr request
        const xhr = new XMLHttpRequest();

        //open data
        xhr.open('GET', 'text.txt', true);

        //load ajax
        xhr.onload = function(){
            if(this.status === 200){
                let p = create('p');
                p.className = 'ajax2';
                p.textContent = xhr.responseText;
                div.appendChild(p);
              
            }
        }

        xhr.send();
    }
}

const container = new MainContainer(Element('.container'));




 