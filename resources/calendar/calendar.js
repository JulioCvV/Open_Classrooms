var roomName = localStorage.getItem("classroomID");
if(roomName=="4101"){
    document.getElementById("classroom").innerHTML="Horario del salón A4T1A";
    document.getElementById("reClassroom").innerHTML="A4T1A";  
}else if(roomName=="4102"){
    document.getElementById("classroom").innerHTML="Horario del salón A4T1B";
    document.getElementById("reClassroom").innerHTML="A4T1B"; 
}else{
    document.getElementById("classroom").innerHTML="Horario del salón "+roomName;
    document.getElementById("reClassroom").innerHTML=roomName;
}
var user = localStorage.getItem("userName");
document.getElementById("userUAO").innerHTML=user;
document.getElementById("userReserve").innerHTML=user;
const stMonthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let scrollTop;
let isCreatingCard;

const stWeekNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado"];
let stCurrentDate = new Date();

let nuCurrentDay = stCurrentDate.getDate();
let nuMonthNumber = stCurrentDate.getMonth();
let nuCurrentYear = stCurrentDate.getFullYear();

/* Buttons */
let ArrowBack = document.getElementById("back");
let ArrowNext = document.getElementById("next");
let btnReserve = document.getElementById("btnReserve");

let date = document.getElementById("date");
let nuWeek = document.getElementById("week");
let tbl = document.getElementById("tbl"),
  rIndex,
  cIndex;
let title = document.getElementById("title");
let title2 = document.getElementById("title2");
let cell = document.getElementsByTagName("td");

let countReservs = 0;

let lastCardCreated = null;
let lastRowCreatedCard = null;
let lastColumnCreatedCard = null;
let lastId = null;
let cellsBusy = [];
let reserveCards = [];

let infoFinalCard = {
  idCut:null,
  titleWrited:null,
  selectTimeStartValue:null,
  selectTimeEndValue:null,
  initialHour:null,
  finalHour:null,
  cellsBusyCard:null,
  lastCellId:null,
};

function showCard(idCreatedCard, row, column, isCreating) {
  lastCardCreated = idCreatedCard;
  lastRowCreatedCard = row;
  lastColumnCreatedCard = column;
  isCreatingCard = isCreating;
  if (isCreating) {
    document.getElementById("btnSave").style.display = "block";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnDelete").style.display = "none";
  } else {
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnUpdate").style.display = "block";
    document.getElementById("btnDelete").style.display = "block";
  }
  document.getElementById("reserveCard").style.display = "block";
}

function cancelCard() {
  if (lastCardCreated && isCreatingCard) {
    $(`#${lastCardCreated}`).remove();
    lastCardCreated = null;
    lastColumnCreatedCard = null;
    lastRowCreatedCard = null;
    isCreatingCard = null;
  }
  document.getElementById("reserveCard").style.display = "none";
}

// Función que se ejecuta al dar botón reservar
function completeInformationCard() {
  let titleWrited = title.value;
  let titleInDOM = document.querySelector('#' + lastCardCreated + ' .title>h4');
  titleInDOM.innerHTML = titleWrited;

  // Setiar las horas seleccionadas
  let selectTimeStart = document.getElementById("timeStart");
  let selectTimeEnd = document.getElementById("timeEnd");

  let selectTimeStartValue = selectTimeStart.options[selectTimeStart.selectedIndex].value;
  let selectTimeEndValue = selectTimeEnd.options[selectTimeEnd.selectedIndex].value;

  let timeInDOM = document.querySelector('#' + lastCardCreated + ' .time>h6');

  // Evaluar si está creado o editando, en caso de estar editando eliminamos el registro viejo para que inserte el nuevo
  // debugger;
  if (!isCreatingCard) {
    let reserveCardsCopy = JSON.parse(localStorage.getItem("reserves"));
    let cardToDelete = reserveCardsCopy.filter(function(obj, idx) {
      return obj.idCut === lastCardCreated
    });
    reserveCardsCopy.splice(reserveCardsCopy.indexOf(cardToDelete[0]), 1);
    localStorage.setItem("reserves", []);
    cellsBusy = [];
    reserveCardsCopy.forEach(function(obj) {
      obj.cellsBusyCard.forEach(function(cell) {
        cellsBusy.push(cell);
      });
    });
    localStorage.setItem("reserves", JSON.stringify(reserveCardsCopy));
  }

  // Agrandar la carda dependiento de las horas
  let countHours = 0;
  let cellsBusyCard = [];
  // debugger;
  for (let i = Number(selectTimeStartValue); i < Number(selectTimeEndValue); i++) {
    cellsBusy.push((lastRowCreatedCard + countHours) + "-" + lastColumnCreatedCard);
    cellsBusyCard.push((lastRowCreatedCard + countHours) + "-" + lastColumnCreatedCard);
    countHours += 1;
  }
  document.getElementById(lastCardCreated).style.height = countHours*90 + "px";


  let initialHour = selectTimeStartValue < 12 ? 'am' : 'pm';
  switch(selectTimeStartValue) {
    case "13":
    selectTimeStartValue = "1";
      break;
    case "14":
    selectTimeStartValue = "2";
      break;
    case "15":
    selectTimeStartValue = "3";
      break;
      case "16":
      selectTimeStartValue = "4";
      break;
    case "17":
    selectTimeStartValue = "5";
      break;
    case "18":
    selectTimeStartValue = "6";
      break;
      case "19":
      selectTimeStartValue = "7";
      break;
    case "20":
    selectTimeStartValue = "8";
      break;  
  };
  let finalHour = selectTimeEndValue < 12 ? 'am' : 'pm';
  switch(selectTimeEndValue) {
    case "13":
        selectTimeEndValue = "1";
        break;
    case "14":
        selectTimeEndValue = "2";
        break;
    case "15":
        selectTimeEndValue = "3";
        break;
    case "16":
        selectTimeEndValue = "4";
        break;
    case "17":
        selectTimeEndValue = "5";
        break;
    case "18":
        selectTimeEndValue = "6";
        break;
    case "19":
        selectTimeEndValue = "7";
        break;
    case "20":
        selectTimeEndValue = "8";
        break;  
    };
  timeInDOM.innerHTML = `${selectTimeStartValue} ${initialHour} - ${selectTimeEndValue} ${finalHour}`;

  // Aumentar el numero de reservas que lleva el usuario
  countReservs += 1;
  let lastCellId = lastCardCreated.split("-")[0];
  let idCut = lastCardCreated;

  const infoFinalCard = {
    idCut,
    titleWrited,
    selectTimeStartValue,
    selectTimeEndValue,
    initialHour,
    finalHour,
    cellsBusyCard,
    lastCellId
  };

  if (localStorage.getItem("reserves") === null) {
    let reserveCards = [];
    reserveCards.push(infoFinalCard);
    localStorage.setItem("reserves", JSON.stringify(reserveCards));
  } else {
    let reserveCards = JSON.parse(localStorage.getItem("reserves"));
    reserveCards.push(infoFinalCard);
    localStorage.setItem("reserves", JSON.stringify(reserveCards));
  }

  // Limpirar la ultima tarjeta creada
  lastCardCreated = null;
  lastColumnCreatedCard = null;
  title.value = "";

  // Cerrar el modal
  cancelCard();
}

function editCard(idCard, rowIndex, cellIndex) {
  showCard(idCard, rowIndex, cellIndex, false);
  let reserves = JSON.parse(localStorage.getItem("reserves"));
  for(let i=0; i < reserves.length; i++){
    let oldTitle =reserves[i].titleWrited;
    title.value= oldTitle;
  }
}

function eliminarCard(){
  let reserves = JSON.parse(localStorage.getItem("reserves"));
  reserves.splice(lastCardCreated,1);
  localStorage.setItem("reserves", JSON.stringify(reserves));

  
    $(`#${lastCardCreated}`).remove();
    lastCardCreated = null;
    lastColumnCreatedCard = null;
    lastRowCreatedCard = null;
    isCreatingCard = null;

  document.getElementById("reserveCard").style.display = "none";

 }

function getReserves() {
  let reserves = JSON.parse(localStorage.getItem("reserves"));
  if (reserves === null) {
    console.log("Puedes reservar");
  } else {
    for (let i = 0; i < reserves.length; i++) {
      let newDiv = document.createElement("div");
      let idCard = reserves[i].idCut;
      let cellID = reserves[i].lastCellId;

      reserves[i].cellsBusyCard.forEach((element) => {
        cellsBusy.push(element);
      });
      newDiv.id = idCard;

      let newDiv2 = document.createElement("div");
      let newDiv3 = document.createElement("div");
      let newDiv4 = document.createElement("div");
      let newh4 = document.createElement("h4");
      let newh5 = document.createElement("h5");
      let newh6 = document.createElement("h6");
      let tdID = document.getElementById(cellID);

      newDiv.className = "o-card-reserve";
      newDiv2.className = "o-status-reserve";
      newDiv3.className = "o-class-name-reserve title";
      newDiv4.className = "o-card-hour-reserve time";

      // Insersión en DOM de los elementos creados
      tbl.appendChild(newDiv);
      tdID.appendChild(newDiv);
      newDiv.appendChild(newDiv2);
      newDiv.appendChild(newDiv3);
      newDiv3.appendChild(newh4);
      newDiv3.appendChild(newh5);
      newDiv.appendChild(newDiv4);
      newDiv4.appendChild(newh6);

      let cellOffset = $(`#${cellID}`).offset().top;
      newDiv.style.top = `${cellOffset}px`;

      let rowIndex = Number(reserves[i].cellsBusyCard[0].split("-")[0]);
      let cellIndex = Number(reserves[i].cellsBusyCard[0].split("-")[1]);
      newDiv.onclick = function (event) {
        editCard(idCard, rowIndex, cellIndex);
      };

      // Agrandar la carda dependiento de las horas
      let countHours = 0;
      for (
        let j = Number(reserves[i].selectTimeStartValue);
        j < Number(reserves[i].selectTimeEndValue);
        j++
      ) {
        countHours += 1;
      }
      document.getElementById(idCard).style.height = countHours * 90 + "px";

      // Completar informaicón de la tarjeta con los datos que apenas son conocidos
      newh4.innerHTML = reserves[i].titleWrited;
      newh5.innerHTML = user;
      newh6.innerHTML = `${reserves[i].selectTimeStartValue} ${reserves[i].initialHour} - ${reserves[i].selectTimeEndValue} ${reserves[i].finalHour}`;
    }
  }
}

function showInitialCard(idCell) {
  // Obtener referencia de la celda seleccionada
  let tdID = document.getElementById(idCell);

  // Declaración y creación de los DIV y etiquetas de texto de la tarjeta
  let newDiv = document.createElement("div");
  let idCard = `${idCell}-${new Date().getTime()}`;
  newDiv.id = idCard;

  let newDiv2 = document.createElement("div");
  let newDiv3 = document.createElement("div");
  let newDiv4 = document.createElement("div");
  let newh4 = document.createElement("h4");
  let newh5 = document.createElement("h5");
  let newh6 = document.createElement("h6");

  newDiv.className = "o-card-reserve";
  newDiv2.className = "o-status-reserve";
  newDiv3.className = "o-class-name-reserve title";
  newDiv4.className = "o-card-hour-reserve time";

  // Insersión en DOM de los elementos creados
  tbl.appendChild(newDiv);
  tdID.appendChild(newDiv);
  newDiv.appendChild(newDiv2);
  newDiv.appendChild(newDiv3);
  newDiv3.appendChild(newh4);
  newDiv3.appendChild(newh5);
  newDiv.appendChild(newDiv4);
  newDiv4.appendChild(newh6);

  let cellOffset = $(`#${idCell}`).offset().top;
  newDiv.style.top = `${cellOffset}px`;
  newDiv.onclick = function (event) {
    editCard(idCard);
  };

  // Completar informaicón de la tarjeta con los datos que apenas son conocidos
  newh4.innerHTML = "Título";
  newh5.innerHTML = user;
  newh6.innerHTML = "";

  return idCard;
}

for (let i = 0; i < tbl.rows.length; i++) {
  for (let j = 0; j < tbl.rows[i].cells.length; j++) {
    tbl.rows[i].cells[j].onclick = function (event) {
      let rIndex = this.parentElement.rowIndex;
      let cIndex = this.cellIndex;
      
        keyRowColumn = rIndex + "-" + cIndex;
        if (
          !(
            cellsBusy.filter(function (obj) {
              return obj === keyRowColumn;
            }).length > 0
          )
        ) {
          let modalIsOpen =
            document.getElementById("reserveCard").style.display === "block";
          if (!modalIsOpen) {
            let getID = event.target.id;
            let idCardCreated = null;

            // Función para crear la tarjeta inicial
            idCardCreated = showInitialCard(getID);

            // Función para mostrar el modal que completará la información de la tarjeta
            showCard(idCardCreated, rIndex, cIndex, true);
          }
        }
      console.log(`Row : ${rIndex} Cell: ${cIndex}`);
    };
  }
}

getReserves();

let day;
let week;
function getWeek() {
  for (let i = 1; i <= 6; i++) {
    day = stCurrentDate.getDate() - stCurrentDate.getDay() + i;
    week = new Date(stCurrentDate.setDate(day))
      .toISOString()
      .slice(8, 10)
      .toString();
    nuWeek.innerHTML += `<div class="o-number">${week+" "+ stWeekNames[i-1]}</div>`;
  }
}

date.innerHTML = stMonthNames[nuMonthNumber];

getWeek();

function setNewDate() {
  stCurrentDate.setFullYear(nuCurrentYear, nuMonthNumber, nuCurrentDay);
  date.textContent = stMonthNames[nuMonthNumber];
  nuWeek.textContent = "";
}
