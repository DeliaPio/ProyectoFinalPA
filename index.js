var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')
var user = document.getElementById('user-login')


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

   var error = ""

   if(error==""){
       window.comunicacion.registroValido([user.value, pass.value]);
   }else{
       alert(error)
   }
   
   if(user.value.match(array)){
    error += ("Bienvenido "+document.getElementById('user-login').value)
   }else{
    error += ("Usuario en existencia, elija otro nombre de usuario")
   }
})

window.comunicacion.inicioCorrecto(function(even, args){
    alert(argsS)
})