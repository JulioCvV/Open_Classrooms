let stEmail="";
let stPass="";
var username="";


function login (){    
    stEmail = document.getElementById('email').value;
    stPass = document.getElementById('pass').value;
    if(stEmail =="jhosua.pachon@uao.edu.co"){
        username="Jhosua Pachon Bueno";
        localStorage.setItem("userName",username);
    }else if(stEmail =="julio.vallejo@uao.edu.co"){
        username="Julio Cesar Vallejo";
        localStorage.setItem("userName",username);
    }else if(stEmail =="juan_d.rojas_r@uao.edu.co"){
        username="Juan David Rojas";
        localStorage.setItem("userName",username);
    }
    if(stEmail =="jhosua.pachon@uao.edu.co" ||stEmail =="julio.vallejo@uao.edu.co"||stEmail =="juan_d.rojas_r@uao.edu.co" && stPass =="Auto1234"){
        window.location.assign('buildings.html');
    }
    else{
        alert('Usuario incorrecto o contraseña incorecta, vuelva a intentarlo');
    }
    
}



