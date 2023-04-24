
console.log('hello app!')
const contactForm = document.querySelector('.contactForm');
let name = document.getElementById('name');
let email =  document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log('submit clicked')

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value

  } 
  console.log(".......", formData);
  let xhr = new  XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'sucess'){
      alert('Email Sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert('someting went wrong!')
    }
  }
  xhr.send(JSON.stringify(formData));
})
