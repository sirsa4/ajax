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

        //get acces to customer in this method by assigning it to a variable. This is so that div can be accessed in inside function inside this method, loadCustomer().
        let div = this.customer;
        //xhr request
        const xhr = new XMLHttpRequest();

        //open data
        xhr.open('GET', 'customer.json', true);

        //load ajax
        xhr.onload = function(){
            if(this.status === 200){
             /* console.log(this.responseText); */

             //parse the json data to normal object first

             const customer = JSON.parse(this.responseText);
             console.log(customer);

             //create html to store json data for person
             const section = create('section');
             section.classNAme = 'person';
             section.innerHTML = 
             `
             <p>Customer ID: ${customer.id}</p>
             <h4>Name: ${customer.name}</h4>
             <p>Works at: ${customer.company}</p>
             <p>Phone: ${customer.phone}</p>
             `;
             console.log(customer);
              
             div.appendChild(section);
            }
        }

        xhr.send();
    }
}

const container = new MainContainer(Element('.container'));




 