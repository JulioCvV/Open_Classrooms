var user = localStorage.getItem("userName");
document.getElementById("userUAO").innerHTML=user;
var buildingIndicator = localStorage.getItem("buildingID");
var prefix="";
if(buildingIndicator=="building1"){
    prefix="1";
}else if(buildingIndicator=="building2"){
    prefix="2";
}else if(buildingIndicator=="building3"){
    prefix="3";
}else if(buildingIndicator=="building4"){
    prefix="4";
}
console.log(buildingIndicator);
console.log(prefix);

var classroomId = "";
function showFirstFloorClassrooms(){
    document.getElementById("floor1").style.backgroundColor="#FF8B1C";
    document.getElementById("floor1").style.color="#FFFFFF";
    document.getElementById("floor2").style.backgroundColor="";
    document.getElementById("floor2").style.color="";
    document.getElementById("floor3").style.backgroundColor="";
    document.getElementById("floor3").style.color="";
    document.getElementById("floor4").style.backgroundColor="";
    document.getElementById("floor4").style.color="";
    var changeClassroom = document.getElementById("containerClassroomsCard");
    while(changeClassroom.hasChildNodes()){
    changeClassroom.removeChild(changeClassroom.firstChild);
    }
    var sufix="";
    if(buildingIndicator=="building4"){
        for(var i=1;i<=2;i++){
            if(i==1){sufix="A";}else{sufix="B";}
            var identifierc= "A"+prefix+"T1"+sufix;
            var building4First="410"+i;
            var cardDiv= document.createElement("div");
            cardDiv.setAttribute("class","o-classroom");
            cardDiv.setAttribute("id",building4First);
            cardDiv.setAttribute("onclick","shareClassroom("+building4First+")")
            var a=document.createElement("a");
            a.setAttribute("class","o-classroom-calendar-link");
            a.setAttribute("href","calendar.html")
            var image=document.createElement("img");
            image.setAttribute("class","o-img-card")
            image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
            var innerDiv=document.createElement("div");
            innerDiv.setAttribute("class","o-info-card")
            var classroomName=document.createElement("h3");
            classroomName.setAttribute("class","o-title");
            classroomName.innerHTML= identifierc;
            innerDiv.appendChild(classroomName);
            a.appendChild(image);
            a.appendChild(innerDiv);
            cardDiv.appendChild(a);
            document.getElementById("containerClassroomsCard").appendChild(cardDiv);
        }
    }else{
        for(var i=1;i<=6;i++){
            var identifierc= prefix+"10"+i;
            var cardDiv= document.createElement("div");
            cardDiv.setAttribute("class","o-classroom");
            cardDiv.setAttribute("id",identifierc);
            cardDiv.setAttribute("onclick","shareClassroom("+identifierc+")")
            var a=document.createElement("a");
            a.setAttribute("class","o-classroom-calendar-link");
            a.setAttribute("href","calendar.html")
            var image=document.createElement("img");
            image.setAttribute("class","o-img-card")
            image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
            var innerDiv=document.createElement("div");
            innerDiv.setAttribute("class","o-info-card")
            var classroomName=document.createElement("h3");
            classroomName.setAttribute("class","o-title");
            classroomName.innerHTML= identifierc;
            innerDiv.appendChild(classroomName);
            a.appendChild(image);
            a.appendChild(innerDiv);
            cardDiv.appendChild(a);
            document.getElementById("containerClassroomsCard").appendChild(cardDiv);
        }
    }
}
function showSecondFloorClassrooms(){
    document.getElementById("floor1").style.backgroundColor="";
    document.getElementById("floor1").style.color="";
    document.getElementById("floor2").style.backgroundColor="#FF8B1C";
    document.getElementById("floor2").style.color="#FFFFFF";
    document.getElementById("floor3").style.backgroundColor="";
    document.getElementById("floor3").style.color="";
    document.getElementById("floor4").style.backgroundColor="";
    document.getElementById("floor4").style.color="";
    var changeClassroom = document.getElementById("containerClassroomsCard");
    while(changeClassroom.hasChildNodes()){
    changeClassroom.removeChild(changeClassroom.firstChild);
    }
    for(var i=1;i<=6;i++){
        var identifierc= prefix+"20"+i;
        var cardDiv= document.createElement("div");
        cardDiv.setAttribute("class","o-classroom");
        cardDiv.setAttribute("id",identifierc);
        cardDiv.setAttribute("onclick","shareClassroom("+identifierc+")")
        var a=document.createElement("a");
        a.setAttribute("class","o-classroom-calendar-link");
        a.setAttribute("href","calendar.html")
        var image=document.createElement("img");
        image.setAttribute("class","o-img-card")
        image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
        var innerDiv=document.createElement("div");
        innerDiv.setAttribute("class","o-info-card")
        var classroomName=document.createElement("h3");
        classroomName.setAttribute("class","o-title");
        classroomName.innerHTML=identifierc;
        innerDiv.appendChild(classroomName);
        a.appendChild(image);
        a.appendChild(innerDiv);
        cardDiv.appendChild(a);
        document.getElementById("containerClassroomsCard").appendChild(cardDiv);
    }
}
function showThirdFloorClassrooms(){
    document.getElementById("floor1").style.backgroundColor="";
    document.getElementById("floor1").style.color="";
    document.getElementById("floor2").style.backgroundColor="";
    document.getElementById("floor2").style.color="";
    document.getElementById("floor3").style.backgroundColor="#FF8B1C";
    document.getElementById("floor3").style.color="#FFFFFF";
    document.getElementById("floor4").style.backgroundColor="";
    document.getElementById("floor4").style.color="";
    var changeClassroom = document.getElementById("containerClassroomsCard");
    while(changeClassroom.hasChildNodes()){
    changeClassroom.removeChild(changeClassroom.firstChild);
    }
    for(var i=1;i<=6;i++){
        var identifierc= prefix+"30"+i;
        var cardDiv= document.createElement("div");
        cardDiv.setAttribute("class","o-classroom");
        cardDiv.setAttribute("id",identifierc);
        cardDiv.setAttribute("onclick","shareClassroom("+identifierc+")")
        var a=document.createElement("a");
        a.setAttribute("class","o-classroom-calendar-link");
        a.setAttribute("href","calendar.html")
        var image=document.createElement("img");
        image.setAttribute("class","o-img-card")
        image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
        var innerDiv=document.createElement("div");
        innerDiv.setAttribute("class","o-info-card")
        var classroomName=document.createElement("h3");
        classroomName.setAttribute("class","o-title");
        classroomName.innerHTML=identifierc;
        innerDiv.appendChild(classroomName);
        a.appendChild(image);
        a.appendChild(innerDiv);
        cardDiv.appendChild(a);
        document.getElementById("containerClassroomsCard").appendChild(cardDiv);
    }
}
function showFourthFloorClassrooms(){
    document.getElementById("floor1").style.backgroundColor="";
    document.getElementById("floor1").style.color="";
    document.getElementById("floor2").style.backgroundColor="";
    document.getElementById("floor2").style.color="";
    document.getElementById("floor3").style.backgroundColor="";
    document.getElementById("floor3").style.color="";
    document.getElementById("floor4").style.backgroundColor="#FF8B1C";
    document.getElementById("floor4").style.color="#FFFFFF";
    var changeClassroom = document.getElementById("containerClassroomsCard");
    while(changeClassroom.hasChildNodes()){
    changeClassroom.removeChild(changeClassroom.firstChild);
    }
    for(var i=1;i<=10;i++){
        var identifierc= prefix+"40"+i;
        var cardDiv= document.createElement("div");
        cardDiv.setAttribute("class","o-classroom");
        cardDiv.setAttribute("id",identifierc);
        cardDiv.setAttribute("onclick","shareClassroom("+identifierc+")")
        var a=document.createElement("a");
        a.setAttribute("class","o-classroom-calendar-link");
        a.setAttribute("href","calendar.html")
        var image=document.createElement("img");
        image.setAttribute("class","o-img-card")
        image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
        var innerDiv=document.createElement("div");
        innerDiv.setAttribute("class","o-info-card")
        var classroomName=document.createElement("h3");
        classroomName.setAttribute("class","o-title");
        classroomName.innerHTML=identifierc;
        innerDiv.appendChild(classroomName);
        a.appendChild(image);
        a.appendChild(innerDiv);
        cardDiv.appendChild(a);
        document.getElementById("containerClassroomsCard").appendChild(cardDiv);
    }
}

function shareClassroom(idc){
    classroomId=document.getElementById(idc);
    localStorage.setItem("classroomID",classroomId.id);
    console.log(classroomId.id);
}
    // var cardDiv= document.createElement("div");
    // cardDiv.setAttribute("class","o-classroom");
    // var a=document.createElement("a");
    // a.setAttribute("class","o-classroom-calendar-link");
    // var image=document.createElement("img");
    // image.setAttribute("class","o-img-card")
    // image.setAttribute("src","resources/classrooms/classroom_crop.jpg")
    // var innerDiv=document.createElement("div");
    // innerDiv.setAttribute("class","o-info-card")
    // var classroomName=document.createElement("h3");
    // classroomName.setAttribute("class","o-title");
    // classroomName.innerHTML="1201";
    // innerDiv.appendChild(classroomName);
    // a.appendChild(image);
    // a.appendChild(innerDiv);
    // cardDiv.appendChild(a);
    // document.getElementById("containerClassroomsCard").appendChild(cardDiv);