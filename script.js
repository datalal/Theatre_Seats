var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
var seatCounter = 0;

var seatingHeader = document.createElement("div");
seatingHeader.className = "seatingHeader";
seatingHeader.textContent = "GC Theatre";
container.appendChild(seatingHeader);


function displaySeats() {
    var usersName = document.getElementById("userName");
    console.log(usersName);



    var seatBox = document.createElement("div");
    seatBox.className = "seatBox";
    seatBox.textContent = "seatBox";
    seatBox.id = "seatBox";
    container.appendChild(seatBox);
}


for (i = 0; i < 24; i++) {

    displaySeats();
    seatCounter[i] = i;

}

document.getElementById("seatBox").onclick = reserveFormLoad();



var stage = document.createElement("div");
stage.className = "stage";
stage.textContent = "stage";
container.appendChild(stage);

function reserveFormLoad(){
var reserveForm = document.createElement("div");
reserveForm.className = "reserveForm";
reserveForm.textContent = "reserveForm" + seatCounter;
container.appendChild(reserveForm);
}
