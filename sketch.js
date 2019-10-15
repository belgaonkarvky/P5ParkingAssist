var MAXCAP = 5;
var BMAXCAP = 10;
var carSlot = [];
var bikeSlot = [];
var slotStartPostiony = 150;
var slotStartPostionx = 10;
var bikeStartPostiony = 50;
var bikeStartPostionx = 600;
var bikeHeight = 20;
var slotHeight = 40;
var nearestSlot = 0;
var bnearestSlot = 0;
var slotOccupiedCount = 0;
var bslotOccupiedCount = 0;
var status = "Request Parking";
function setup() {
  createCanvas(900, 900);
  for (let i = 0; i < MAXCAP; i++) {
    carSlot[i] = new Slot(slotStartPostionx, slotStartPostiony, slotHeight);
    slotStartPostiony += slotHeight;

    bikeSlot[i] = new Slot(bikeStartPostionx, bikeStartPostiony, bikeHeight);
    bikeStartPostiony += bikeHeight;

  }
  for (let i = 0; i < BMAXCAP; i++) {
    bikeSlot[i] = new Slot(bikeStartPostionx, bikeStartPostiony, bikeHeight);
    bikeStartPostiony += bikeHeight;
  }
  // img = loadImage('Images/Car.png'); 
}

function draw() {
  background(200);

  //Slots Show move
  for (let s of carSlot) {
    s.showSlot();
    s.disply();
    s.moveCar();
  }
  for (let b of bikeSlot) {
    b.showSlot();
    b.disply();
    b.moveCar();
  }

  //Slot Count
  let scount = "No of Slots occupied " + slotOccupiedCount;
  fill(255);
  rect(200, 30, 150, 40);
  fill(200, 130, 40);
  text(scount, 205, 55);
  //Slot Count
  //Rquest Parking
  fill(255);
  ellipse(60, 60, 100, 100);
  if (slotOccupiedCount >= MAXCAP) {
    fill(255, 0, 0);
    status = "Parking Full";
  }
  else {
    fill(0, 255, 0);
    status = "Request Car\nParking";
  }
  text(status, 15, 60);
  //Request Parking
//Slot Count
let bcount = "No of Slots occupied " + bslotOccupiedCount;
fill(255);
rect(400, 30, 150, 40);
fill(400, 130, 40);
text(bcount, 405, 55);
  //frameRate(1);

  fill(255);
  ellipse(650, 60, 100, 100);
  if (bslotOccupiedCount >= BMAXCAP) {
    fill(255, 0, 0);
    status = "Parking Full";
  }
  else {
    fill(0, 255, 0);
    status = "Request Bike \nParking";
  }
  text(status, 610, 60);


}

function mousePressed() {

  var d = dist(mouseX, mouseY, 60, 60);
  //Allocate Slot
  if (d < 50 && slotOccupiedCount < MAXCAP) {
    console.log("pressed ellipse");
    carSlot[nearestSlot].fillSlot = 200;
    carSlot[nearestSlot].slotStatus = true;
    slotOccupiedCount = slotOccupiedCount + 1;
    getNearestEmptySlot(nearestSlot,carSlot);
    return;
  }
  var dd = dist(mouseX, mouseY, 650, 60);
  console.log("pressed ellipse=" + dd);
  if (dd < 50 && bslotOccupiedCount < BMAXCAP) {
    console.log("pressed ellipse");
    bikeSlot[bnearestSlot].fillSlot = 200;
    bikeSlot[bnearestSlot].slotStatus = true;
    bslotOccupiedCount = bslotOccupiedCount + 1;
    bgetNearestEmptySlot(bnearestSlot,bikeSlot);
    return;
  }

  console.log("after ellipse");
  for (let i = 0; i < carSlot.length; i++) {
    //Empty Slot
    var empty = (carSlot[i].slotStatus) ? carSlot[i].emptySlot(mouseX, mouseY) : false;
    if (empty) {
      nearestSlot = i < nearestSlot ? i : nearestSlot;
      slotOccupiedCount = slotOccupiedCount - 1;
      return;
    }
  }
  for (let i = 0; i < bikeSlot.length; i++) {
    //Empty Slot
    var empty = (bikeSlot[i].slotStatus) ? bikeSlot[i].emptySlot(mouseX, mouseY) : false;
    if (empty) {
      bnearestSlot = i < bnearestSlot ? i : bnearestSlot;
      bslotOccupiedCount = bslotOccupiedCount - 1;
      return;
    }
  }

}








function getNearestEmptySlot(nearestEmptySlot,cSlot) {
  console.log("getNearestEmptySlot=");
  for (var i = nearestEmptySlot; i < cSlot.length; i++) {
    console.log("slotStatus=" + "i=" + i + " " + cSlot[i].slotStatus);
    if (cSlot[i].slotStatus == false) {
      nearestSlot = i;
      console.log("nearestEmptySlot=" + nearestSlot);
      break;
    }
  }
}
function bgetNearestEmptySlot(nearestEmptySlot,cSlot) {
  console.log("getNearestEmptySlot=");
  for (var i = nearestEmptySlot; i < cSlot.length; i++) {
    console.log("slotStatus=" + "i=" + i + " " + cSlot[i].slotStatus);
    if (cSlot[i].slotStatus == false) {
      bnearestSlot = i;
      console.log("nearestEmptySlot=" + bnearestSlot);
      break;
    }
  }
}