//Face
var c = document.getElementById("CheetahFace");
var ctx = c.getContext("2d");
//Face
ctx.beginPath();
ctx.fillStyle = "yellow"
ctx.ellipse(610, 360, 75, 100, Math.PI / 8, 0, 2 * Math.PI);
ctx.ellipse(670, 360, 100, 75, Math.PI/3, 0, 2 * Math.PI);
ctx.fill();
//Mouth
ctx.beginPath();
ctx.fillStyle = "yellow"
ctx.ellipse(630, 410, 50, 75, Math.PI / 8, 0, 2 * Math.PI);
ctx.ellipse(650, 410, 75, 50, Math.PI/3, 0, 2 * Math.PI);
ctx.fill();


//Ear 1
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow"
ctx.lineWidth = 5;
ctx.moveTo(525, 350);
ctx.arcTo(525, 225, 600, 275, 20);
ctx.arcTo(580,275,600 ,275, 20)
ctx.lineTo(600, 275)
ctx.stroke();
ctx.fill()

//Ear 2
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow"
ctx.lineWidth = 5;
ctx.moveTo(755, 350);
ctx.arcTo(755, 225, 680, 275, 20);
ctx.arcTo(700,275,680 ,275, 20)
ctx.lineTo(680, 275)
ctx.stroke();
ctx.fill()

// //Start
// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(525, 350, 5, 0, 2 * Math.PI);
// ctx.fill();

// // Control points
// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(525, 225, 5, 0, 2 * Math.PI); // Control point one
// ctx.arc(600, 275, 5, 0, 2 * Math.PI); // Control point two
// ctx.fill();