document.querySelector('#btn').addEventListener('click', signUp)
var userDataBase = JSON.parse(localStorage.getItem('userDB')) || [];
function signUp(){
 var name = document.querySelector('#name').value;
 var email = document.querySelector('#email').value;
 var password = document.querySelector('#password').value;

 var userData = {
     userName:name,
     emailAddress:email,
     password:password
 }
 
 userDataBase.push(userData);
 // console.log(userDataBase);
 localStorage.setItem('userDB', JSON.stringify(userDataBase));
 window.location.href = 'login.html'
 
}