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
for( i = 1; i < 7; i++){

// move(append) into a row div with seats

  var rowCount = document.createElement("div");
  rowCount.className = "rowCount";
  rowCount.textContent = "Row " + i;
  rowCount.id = "rowCount";
  container.appendChild(rowCount);

    for (j = 1; j < 5; j++) {

        seatInfo.push({
            userName: "testUser",
            seatNumber: i,
            reserved: false
        });

        seatBox = document.createElement("div");
        seatBox.className = "seatBox";
        seatBox.textContent = "Seat " + j;
        // seatBox.textContent = "seatBox" + " " + j + " " + seatInfo[i].seatNumber;

        seatBox.id = "seatBox";
        container.appendChild(seatBox);
        // seatInfo[0].reserved = true;
        // seatInfo[0].seatNumber = i;

    };



  };
};


console.log(seatInfo);

displaySeats();

var stage = document.createElement("div");
stage.className = "stage";
stage.textContent = "stage";
container.appendChild(stage);
// reserveFormLoad();

// var activeSeat = document.body.onclick.textContent;
 document.getElementById("seatBox").onclick = reserveFormLoad();


console.log("whoa");
reserveSeat();


function reserveFormLoad(seat) {

  var formLoad = document.createElement("form");
  formLoad.className = "formLoad";
formLoad.textContent = "Reserve A Seat";
  container.appendChild(formLoad);


  var lineBreak = document.createElement("p");
  lineBreak.className = "lineBreak";
  // lineBreak.textContent = "lineBreak";
  formLoad.appendChild(lineBreak);

  var userNameText = document.createElement("input");
  userNameText.className = "userNameText";
  userNameText.type = "text";
  userNameText.id = "userNameText";
  userNameText.placeholder = "Please Enter Name";
  formLoad.appendChild(userNameText);

  var lineBreak = document.createElement("p");
  lineBreak.className = "lineBreak";
  // lineBreak.textContent = "lineBreak";
  formLoad.appendChild(lineBreak);

  var reserveCheck = document.createElement("input");
  reserveCheck.className = "reserveCheck";
  reserveCheck.textContent = "reserveCheck";
  reserveCheck.type = "checkbox";
  reserveCheck.name = "reserveCheck";
  // reserveCheck.placeholder = "Please Enter Name";
  formLoad.appendChild(reserveCheck);

    var reserveForm = document.createElement("span");
    reserveForm.className = "reserveForm";
    reserveForm.textContent = " Reserve Seat?";
    formLoad.appendChild(reserveForm);

    var lineBreak = document.createElement("p");
    lineBreak.className = "lineBreak";
    // lineBreak.textContent = "lineBreak";
    formLoad.appendChild(lineBreak);

    var submitButton = document.createElement("button");
    submitButton.className = "submitButton";
    submitButton.textContent = "Submit";
    submitButton.type = "button";
    // submitButton.onclick = reserveSeat();
    formLoad.appendChild(submitButton);


};

function reserveSeat() {


var userNameInput = document.getElementById("userNameText").value;
// var reserveCheckBox = document.querySelector('input[name="reserveCheck"]:checked').value;

console.log(userNameInput);

console.log("who hey sets");

};
