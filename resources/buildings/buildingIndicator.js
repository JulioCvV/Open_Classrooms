var user = localStorage.getItem("userName");
document.getElementById("userUAO").innerHTML=user;
var buildingId="";
var roomName = localStorage.getItem("classroomID");
document.getElementById("classroomRName").innerHTML="Salón "+roomName;
function setBuilding1(){
    buildingId=document.getElementsByClassName("o-building")[0].id;
    localStorage.setItem("buildingID",buildingId);
}
function setBuilding2(){
    buildingId=document.getElementsByClassName("o-building")[1].id;
    localStorage.setItem("buildingID",buildingId);
}
function setBuilding3(){
    buildingId=document.getElementsByClassName("o-building")[2].id;
    localStorage.setItem("buildingID",buildingId);
}
function setBuilding4(){
    buildingId=document.getElementsByClassName("o-building")[3].id;
    localStorage.setItem("buildingID",buildingId);
}