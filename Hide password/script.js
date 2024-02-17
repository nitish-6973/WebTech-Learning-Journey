let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function (){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src="fa-regular fa-eye"
    }else{
        password.type ="password";
    }
}