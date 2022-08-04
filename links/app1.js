
let pro = document.getElementById('p1')
console.log(pro);
let detail = () => {
    let named = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phoneno = document.querySelector('#phoneno');
    let address = document.querySelector('#Address');
    let errorelem = document.getElementById('error');
    let prod = document.getElementById('product')

    prod.innerHTML = "Boost";



    let messege = [];
    if (named.value === '') {
        messege.push('Name req')
        errorelem.innerHTML = messege;
    }
    else if (email.value === '') {
        messege.push('email req')
        errorelem.innerHTML = messege;

    }
    else if (phoneno.value === '') {
        messege.push('Phone no req')
        errorelem.innerHTML = messege;

    }
    else if (address.value === '') {
        messege.push('Address req')
        errorelem.innerHTML = messege;

    }

    else {
        errorelem.innerHTML = '';
        alert("Thanks for shopping")
    }

    let arr1 = [];



    let info = {
        name: named.value,
        email1: email.value,
        phoneno1: phoneno.value,
        Address: address.value,
        prof: prod.innerHTML = "Boost"
    }
    //let{name,email1,phoneno1,Address,prof}=info;
    arr1.push(info);
    localStorage.setItem('order', JSON.stringify(arr1));
    console.log(localStorage.getItem('order',JSON.stringify(arr1)))
}
let back = () => {


    location.href = "./orderd.html";
}
let detail1 = () => {
    let named = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phoneno = document.querySelector('#phoneno');
    let address = document.querySelector('#Address');
    let errorelem = document.getElementById('error');
    let prod = document.getElementById('product')


    prod.innerHTML = "ON SERIOUS MASS";


    let messege = [];
    if (named.value === '') {
        messege.push('Name req')
        errorelem.innerHTML = messege;
    }
    else if (email.value === '') {
        messege.push('email req')
        errorelem.innerHTML = messege;

    }
    else if (phoneno.value === '') {
        messege.push('Phone no req')
        errorelem.innerHTML = messege;

    }
    else if (address.value === '') {
        messege.push('Address req')
        errorelem.innerHTML = messege;

    }

    else {
        errorelem.innerHTML = '';
        alert("Thanks for shopping")
    }


 let arr1 = [];


    let info = {
        name: named.value,
        email1: email.value,
        phoneno1: phoneno.value,
        Address: address.value,
        prof: prod.innerHTML = "ON SERIOUS MASS"
    }
    //let{name,email1,phoneno1,Address,prof}=info;
    arr1.push(info);
    localStorage.setItem('order2', JSON.stringify(arr1));
    console.log(localStorage.getItem('order2',JSON.stringify(arr1)))
}
let back1 = () => {


    location.href = "./orderd.html";
}
let detail2 = () => {
    let named = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phoneno = document.querySelector('#phoneno');
    let address = document.querySelector('#Address');
    let errorelem = document.getElementById('error');
    let prod = document.getElementById('product')


    prod.innerHTML = "GYM";


    let messege = [];
    if (named.value === '') {
        messege.push('Name req')
        errorelem.innerHTML = messege;
    }
    else if (email.value === '') {
        messege.push('email req')
        errorelem.innerHTML = messege;

    }
    else if (phoneno.value === '') {
        messege.push('Phone no req')
        errorelem.innerHTML = messege;

    }
    else if (address.value === '') {
        messege.push('Address req')
        errorelem.innerHTML = messege;

    }

    else {
        errorelem.innerHTML = '';
        alert("Thanks for shopping")
    }

    let arr1 = [];


    let info = {
        name: named.value,
        email1: email.value,
        phoneno1: phoneno.value,
        Address: address.value,
        prof: prod.innerHTML = "GYM"
    }
    //let{name,email1,phoneno1,Address,prof}=info;
    arr1.push(info);
    localStorage.setItem('order3', JSON.stringify(arr1));
    console.log(localStorage.getItem('order3',JSON.stringify(arr1)))
}
let back2 = () => {


    location.href = "./orderd.html";
}





let detail3 = () => {
    let named = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phoneno = document.querySelector('#phoneno');
    let address = document.querySelector('#Address');
    let errorelem = document.getElementById('error');
    let prod = document.getElementById('product')


    prod.innerHTML = "Dexameth Thasone";


    let messege = [];
    if (named.value === '') {
        messege.push('Name req')
        errorelem.innerHTML = messege;
    }
    else if (email.value === '') {
        messege.push('email req')
        errorelem.innerHTML = messege;

    }
    else if (phoneno.value === '') {
        messege.push('Phone no req')
        errorelem.innerHTML = messege;

    }
    else if (address.value === '') {
        messege.push('Address req')
        errorelem.innerHTML = messege;

    }

    else {
        errorelem.innerHTML = '';
        alert("Thanks for shopping")
    }


    let arr1 = [];


    let info = {
        name: named.value,
        email1: email.value,
        phoneno1: phoneno.value,
        Address: address.value,
        prof: prod.innerHTML = "Dexameth Thasone"
    }
    //let{name,email1,phoneno1,Address,prof}=info;
    arr1.push(info);
    localStorage.setItem('order4', JSON.stringify(arr1));
    console.log(localStorage.getItem('order4',JSON.stringify(arr1)))
}
let back3 = () => {


    location.href = "./orderd.html";
}

let action=()=>{
    location.href="../index.html";
}










