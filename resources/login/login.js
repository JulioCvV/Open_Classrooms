let stEmail="";
let stPass="";


function login (){    
    stEmail = document.getElementById('email').value;
    stPass = document.getElementById('pass').value;
    if(stEmail =="juandavid.moreno@uao.edu.co" && stPass =="123"){
        window.location.assign('buildings.html');
    }
    else{
        alert('Usuario incorrecto o contraseña incorecta, vuelva a intentarlo');
    }
    
}



