canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="black";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="pink";
ctx.lineWidth=2;
ctx.arc(220, 220, 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(230, 230, 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=2;
ctx.arc(240, 240, 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=2;
ctx.arc(250, 250, 40 , 0 , 2 * Math.PI);
ctx.stroke();