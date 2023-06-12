

const hourEl=document.getElementById("hour");

const minuteEl=document.getElementById("minutes");

const secondEl=document.getElementById("seconds");

const ampmEl=document.getElementById("ampm");



function updateClock()
{
	let h =new Date().getHours();
	let m =new Date().getMinutes();
	let s =new Date().getSeconds();
	let ampm="PM";


if(h>12){

	h=h-12
	ampm="AM"
}

hourEl.innerText=h;
minuteEl.innerText=m;
secondsEl.innerText=s;
ampmEl,(innerText=ampm);

setTimeout( ()=>{
	updateclock();
},1000);

}

updateClock();
























function myTimer(){

	const d=new Date();
	document.getElementById(clock).innerHTML=d.toLocaleTimeString();
}

















