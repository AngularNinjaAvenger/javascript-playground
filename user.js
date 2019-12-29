$('input').on('keyup',function(){
    let input = $('input').val();
    
    if (input>10) {
       $('span').html('your can only make 10 request');
       $('button').attr('disabled','true')
    }
    else{
        $('span').html(' ');
        $('button').removeAttr('disabled','false')
    }
})




let button = document.getElementsByTagName('button');
button[0].addEventListener('click',()=>{
let input = $('input').val();
let lo  = parseInt(input);
let xhr  = new XMLHttpRequest();
xhr.open('GET','users.json',true);
xhr.onload=function(){
if (this.status===200 &&this.readyState===4) {
let res = JSON.parse(this.responseText);
                  
for (i = 0; i < lo; i++) {
    $('div').append(`<li>user id: ${res[i].id}</li>
                  <li>NAME:${res[i].name}</li>
                  <li>EMAIL:${res[i].email}</li>
                  <li>ADDRESS INFO:${res[i].address.street}, 
                  :${res[i].address.suit},
                  :${res[i].address.city},
                  :${res[i].address.zipcode}</li>
                  li>USER GEO LOCATION:${res[i].address.geo.lat} and :${res[i].address.geo.lng}</li>

                  <span>business informstinon
                  <li>phone number:${res[i].phone}</li>
                  <li>WEBSITE:${res[i].website}</li>
                  <li>company:${res[i].company.name},:${res[i].company.catchPhrase},:${res[i].company.bs}</li>
                  `)
}
}
}
xhr.send();



})
