let submit=()=>{
    let named = document.getElementById('rname');
    let phoneno=document.getElementById('rphno');
    let email=document.getElementById('remail');
    let age= document.getElementById('rage').value;
    let rad1=document.getElementById('gen1');
    let rad2=document.getElementById('gen2');
    const rad=document.querySelectorAll('input[name="gen"]');
    console.log(rad.value);
    
   
    
    let err=document.getElementById('er1');
  
   

    let message=[];
    if(named.value=='' ){
        message.push('name req');
        err.innerHTML=message;
        

    }
    else if(phoneno===''){
        message.push('phone no req')
        err.innerHTML=message;

    }
    else if (email.value===''){
        message.push('email req');
        err.innerHTML=message;
        

    }
    else if(age==='' || age.length>=3){
        message.push('age correct req');
        err.innerHTML=message;
        

    }
    else if((rad1.checked==false)&&(rad2.checked==false)){
        message.push('gender check req');
        err.innerHTML=message;
        

    }
    else{
        alert('form submited successfully')
        err.style.opacity=0;
    }
  let infoarr=[];
    let person={
        name:named.value,
    phonenum:phoneno,
    Email:email.value,
     Age:age,
     
     }
     infoarr.push(person)
    sessionStorage.setItem('Client info',JSON.stringify(infoarr));
     let info=sessionStorage.getItem('Client info') ;
     console.log(info)
    
    
   
     for (const rads of rad) {
        if (rads.checked) {
            let gender = rads.value;
            sessionStorage.setItem('Cgender',`${gender}`)
            let cgen=sessionStorage.getItem('Cgender');
            console.log(cgen);
            break;
        
   

}}}
let back=()=>{
    location.href="../index.html"
}

            