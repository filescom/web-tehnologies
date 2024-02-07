

/*Первое задание*/

let button_one = document.getElementById('button');
button_one.addEventListener("click", function(){
	button_one.innerHTML = "<b>Полужирный шрифт</b><br><i>Курсив</i><br><center>Строка расположена по центру</center>";
})

/*Второе задание*/

let img2 = document.querySelector('#img_work');

function rotate() {
	img2.style.transform = "rotate(33deg)";
}
function norotate() {
	img2.style.transform = "rotate(0deg)";
}
function increase() {
	img2.style.width = "245px";
	img2.style.height = "275px";
}
function noIncrease() {
	img2.style.width = "180px";
	img2.style.height = "150px";
}
let isMenuShow = true;
img2.addEventListener('mouseover', rotate);
img2.addEventListener('mouseout', norotate);
img2.addEventListener('click', function()
{
	if (isMenuShow )
	{
		increase();
		isMenuShow  = false;
	}
	else
	{
		noIncrease();
	isMenuShow  = true;
	}
});


let time = document.querySelector('.work_three');

/*Третье задание*/


function timeInput() {
	DateObj = new Date();
let hours = DateObj.getHours();
let min = DateObj.getMinutes();
let sec = DateObj.getSeconds();
if (min < 10) {
	min = "0" + min;
}
if (sec < 10) {
	sec = "0" + sec;
}
if  (hours < 10) {
	hours = "0" + hours;
}
let timeMoscow = (`Московское время: ${hours} : ${min} : ${sec}`);


document.getElementById("textTime").innerHTML = timeMoscow;
setTimeout('timeInput()', 1000);
}

function days() {
	Days = new Array("воскресенье", "понедельник", "вторник",
	 "среда", "четверг", "пятница", "суббота");
daysObj = new Date();
day = daysObj.getDay();
numberDay = daysObj.getDate();
monthList = new Array("Января", "Февраля", "Марта", "Апреля", "Мая",
"Июня", "Июля", "Августа", "Сентября", "Ноября", "Декабря",);
let month = daysObj.getMonth();
	month -= 1;
let year = daysObj.getYear();
if (year < 2000)
	{
	years = 1900 + year;
	}
else
	{
	years = year;
	}
let dateOut = (`${numberDay} ${monthList[month]} ${years} года, ${Days[day]}`);
document.querySelector("#textDays").innerHTML = dateOut;
}

days();

/*Четвертое задание*/

function inputText(){
	let textInput = document.getElementById('textInput');
	 textInput.value = textInput.value.replace(/%/g, '@');
}
document.getElementById('buttonText').addEventListener('click', inputText);

/*Пятое задание*/

/*Первый прямоугольник*/
let rectangleOne = document.getElementById("rectangleOne");
let ctxOne = rectangleOne.getContext("2d");
ctxOne.fillStyle = "#00FF00";
ctxOne.fillRect(0,0,200,100);


/*Второй прямоугольник*/
let rectangleTwo = document.getElementById("rectangleTwo");
let ctxTwo = rectangleTwo.getContext("2d");
ctxTwo.fillStyle = "#FFFF00";
ctxTwo.fillRect(0,0,200,100);


/*Ромб*/

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

ctx.strokeStyle = '#ff0000'; 
ctx.fillStyle = '#ffff00'; 

ctx.beginPath();
ctx.moveTo(100, 10); 
ctx.lineTo(190, 100); 
ctx.lineTo(100, 190); 
ctx.lineTo(10, 100); 
ctx.closePath();
ctx.fill();
ctx.stroke();

/*Приветствие canvas*/


let canvasText = document.getElementById('canvasText');
let context = canvasText.getContext('2d');
context.fillStyle = 'yellow';
context.strokeStyle = 'purple';
context.font = '30px Arial';
let text = 'Привет, мир!';
let x = 50;
let y = 100;
context.fillText(text, x, y);
context.strokeText(text, x, y);

/*Шестое задание*/

let inputCalc = document.querySelector("#input__calc");
console.log(inputCalc);

inputCalc.innerHTML = "sjdfhjsdfh"