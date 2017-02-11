var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
var seatCounter = [];
var seatInfo = [{
    userName: "testUser",
    seatNumber: 0,
    reserved: true
}];

var seatBox = document.createElement("div");

var seatingHeader = document.createElement("div");
seatingHeader.className = "seatingHeader";
seatingHeader.textContent = "GC Theatre";
container.appendChild(seatingHeader);


function displaySeats() {
    //var usersName = document.getElementById("userName");
    // console.log(usersName);

    for (i = 1; i < 25; i++) {

        seatInfo.push({
            userName: "testUser",
            seatNumber: i,
            reserved: false
        });

        seatBox = document.createElement("div");
        seatBox.className = "seatBox";
        seatBox.textContent = "seatBox" + seatInfo[i].seatNumber;
        seatBox.id = "seatBox";
        container.appendChild(seatBox);
        // seatInfo[0].reserved = true;
        // seatInfo[0].seatNumber = i;

    }
};


console.log(seatInfo);

displaySeats();
// reserveFormLoad();

// var activeSeat = document.getElementById("seatBox").innerHTML;
document.getElementById("seatBox").onclick = reserveFormLoad();


console.log("whoa");

var stage = document.createElement("div");
stage.className = "stage";
stage.textContent = "stage";
container.appendChild(stage);

function reserveFormLoad() {
    var reserveForm = document.createElement("div");
    reserveForm.className = "reserveForm";
    reserveForm.textContent = "reserveForm" + '<p>' + "TEST P";
    container.appendChild(reserveForm);
};
