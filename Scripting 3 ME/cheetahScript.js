//Face
var c = document.getElementById("CheetahFace");
var ctx = c.getContext("2d");
//Face
ctx.beginPath();
ctx.fillStyle = "yellow"
ctx.ellipse(610, 360, 75, 100, Math.PI / 8, 0, 2 * Math.PI);
ctx.ellipse(670, 360, 100, 75, Math.PI/3, 0, 2 * Math.PI);
ctx.fill();

//MouthUpper
ctx.beginPath();
ctx.fillStyle = "yellow"
ctx.ellipse(630, 410, 50, 75, Math.PI / 8, 0, 2 * Math.PI);
ctx.ellipse(650, 410, 75, 50, Math.PI/3, 0, 2 * Math.PI);
ctx.fill();

//MouthLower
ctx.beginPath();
ctx.fillStyle = "yellow"
ctx.ellipse(640, 420, 55, 75, 0, 0, 2 * Math.PI);

ctx.fill();

//Ear 1
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow"
ctx.lineCap = "round"
ctx.lineWidth = 5;
ctx.moveTo(525, 350);
ctx.arcTo(525, 225, 600, 275, 20);
ctx.arcTo(580,275,600 ,275, 20)
ctx.lineTo(600, 275)
ctx.lineTo(525,350);
ctx.stroke();
ctx.fill();

//Ear 2
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow"
ctx.lineCap = "round"
ctx.lineWidth = 5;
ctx.moveTo(755, 350);
ctx.arcTo(755, 225, 680, 275, 20);
ctx.arcTo(700,275,680 ,275, 20)
ctx.lineTo(680, 275);
ctx.lineTo(755,350);
ctx.stroke();
ctx.fill()

//Eye 1
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black"
ctx.lineCap = "round"
ctx.lineWidth = 5;
ctx.moveTo(575, 350);
ctx.arcTo(600, 325, 625, 350, 35);
ctx.lineTo(620, 375);
ctx.arcTo(590,380,575 ,350, 30)
ctx.lineTo(575, 350);
ctx.stroke();
ctx.fill();

//Eye 2
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black"
ctx.lineCap = "round"
ctx.lineWidth = 5;
ctx.moveTo(705, 350);
ctx.arcTo(680, 325, 655, 350, 35);
ctx.lineTo(660, 375);
ctx.arcTo(690,380,705 ,350, 30)
ctx.lineTo(705, 350);
ctx.stroke();
ctx.fill();

//Line 1
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black"
ctx.lineCap = "round"
ctx.lineWidth = 10;
ctx.moveTo(620, 350);
ctx.arcTo(650, 375, 620, 400, 35);
ctx.arcTo(610, 350, 620 ,450, 35);
// ctx.lineTo(660, 375);

// ctx.lineTo(705, 350);
ctx.stroke();
// ctx.fill();

// //Start
// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(575, 350, 5, 0, 2 * Math.PI);
// ctx.fill();

// // Control points
// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(600, 325, 5, 0, 2 * Math.PI); // Control point one
// ctx.arc(625, 350, 5, 0, 2 * Math.PI); // Control point two
// ctx.fill();