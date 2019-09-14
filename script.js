var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rand=document.getElementById("btn");




function generaterand(){
coloran1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
coloran2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
	color1.value=coloran1;
	color2.value=coloran2;
	setGradient();

}
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
rand.addEventListener("click",generaterand);