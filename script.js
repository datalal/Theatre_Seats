var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function displaySeats() {
    var usersName = document.getElementById("userName");
    console.log(usersName);



    var seatBox = document.createElement("div");
    seatBox.className = "seatBox";
    seatBox.textContent = "seatBox";
    container.appendChild(seatBox);
}


for (i = 0; i < 24; i++) {

    displaySeats();

}

var stage = document.createElement("div");
stage.className = "stage";
stage.textContent = "stage";
container.appendChild(stage);
