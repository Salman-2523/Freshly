document.querySelector('#btn').addEventListener('click', login)
var registeredUsers = JSON.parse(localStorage.getItem('userDB'));
// console.log(registeredUsers);

function login(){
var email = document.querySelector('#email').value;
var password = document.querySelector('#password').value;

  if(email == 'admin' && password == 'admin'){
    window.location.href = 'admin.html'
  }
  else{

     var flag = false;
for(var i=0; i<registeredUsers.length; i++){
  if(registeredUsers[i].emailAddress == email && registeredUsers[i].password == password){
    // alert('welcome' + ' ' + registeredUsers[i].userName);
    window.location.href = 'index.html'
    flag = true;
    break;
  }
}
if(flag == true){
  alert('welcome to freshly')
}else{
  alert('wrong details')
}
}

}