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
    const crt = document.createElement(crt);
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

//ajax xml http request
const ajax = ()=>{
    const xhr = new XMLHttpRequest();
    console.log('Ready state is:', xhr.readyState);
    //requestSate is 0 here. xhr is only created atm. 

    //readyState property goes from 1 to 4
    /* 
    - 0: no request is made
    - 1: server connection working
    - 2: request made
    - 3: request processing
    - 4: quest finished and ready to go.
    */



    //open() method
     /*
        -open() takes in 3 parameters
        -first: type of request: here 'GET'
        -second: request file name. from which file data is fetched from
        -if async boolean: true for async, false for not async 
      */
     xhr.open('GET', 'text.txt',true);

     //readyState is 1 here. request is made
     console.log('Ready state is:', xhr.readyState);


   

    //onprogress(). method when request is loading/progressing. readyState at 3 at this point.
    xhr.onprogress = function(){
        console.log(`onprogress() readyStatus is: ${xhr.readyState} : loading spinner can be added here`);
    }

      //onload() what to do with received data
     /*
        -status 200: everything is ok, readystatus is 4.
        -status 403: forbidden, no access
        -status 404: page not found
      */
     xhr.onload = function(){
         //readyState is 4 here. loading is finished.
        console.log('Ready state is:', xhr.readyState);


        if(this.status === 200){
            console.log(this.responseText);


            p.textContent = this.responseText;
            container.appendChild(p);
        }
        
     }

     //xhr.error() to show data cant be found
     xhr.error = function(){
         console.log('Data can not be found');
     }
    
     //send() for onload() to run
     //send() must 
     xhr.send();
}

//button click event
btn.addEventListener('click', ajax);


 