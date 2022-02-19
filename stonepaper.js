var count=0;
	var myscore=0;
	var computer=0;
   var ties=0;
  
 var image11=document.getElementById("image11");
var image22=document.getElementById("image22");
var image33=document.getElementById("image33");


function stone(){
	var display=document.getElementById("whole");

var new1=document.getElementById("new1");
var image1=document.getElementById("image1");
var image2=document.getElementById("image2");
var image3=document.getElementById("image3");
 var image11=document.getElementById("image11");
var image22=document.getElementById("image22");
var image33=document.getElementById("image33");
if(image2.style.display=="block" || image3.style.display=="block"){
image2.style.display="none";
image3.style.display="none";
image1.style.display="block";
}
else{
	image1.style.display="block";
}
	count++;
	var random=Math.random() * (3-1) + 1;
	var round=Math.round(random);
	console.log(round);
	
           if(round==2){
           	computer++;
           	if(image11.style.display=="block" || image33.style.display=="block"){
image11.style.display="none";
image33.style.display="none";
image22.style.display="block";}
else{
	image22.style.display="block";
}
           }
    if(round==3){
             myscore++;
             	if(image11.style.display=="block" || image22.style.display=="block"){
image11.style.display="none";
image22.style.display="none";
image33.style.display="block";}
else{
	image33.style.display="block";
}  
}
if(round==1){
ties++;
	if(image22.style.display=="block" || image33.style.display=="block"){
image22.style.display="none";
image33.style.display="none";
image11.style.display="block";}
else{
	image11.style.display="block";
}

}
function six(){
if(myscore==6 || computer==6){

	if(computer==6){
		document.getElementById("result").innerHTML="COMPUTER WON!!";
}
if(myscore==6){
	document.getElementById("result").innerHTML="YOU WON!!";
}count=0;
myscore=0;
computer=0;
ties=0;

if(whole.style.display=="block"){
	whole.style.display="none";
	new1.style.display="block";}}
document.getElementById("ties").innerHTML=ties;
	document.getElementById("tries").innerHTML=count;

document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;}
	setTimeout(six,2000);
	document.getElementById("ties").innerHTML=ties;
	document.getElementById("tries").innerHTML=count;

document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;

}

function paper(){
	var display=document.getElementById("whole");
var new1=document.getElementById("new1");

var image1=document.getElementById("image1");
var image2=document.getElementById("image2");
var image3=document.getElementById("image3");
 var image11=document.getElementById("image11");
var image22=document.getElementById("image22");
var image33=document.getElementById("image33");
if(image1.style.display=="block" || image3.style.display=="block"){
image1.style.display="none";
image3.style.display="none";
image2.style.display="block";}
else{
	image2.style.display="block";
}
	count++;
	var random=Math.random() * (3-1) + 1;
	var round=Math.round(random);
	console.log(round);
	if(round==1){
		myscore++;
		if(image22.style.display=="block" || image33.style.display=="block"){
image33.style.display="none";
image22.style.display="none";
image11.style.display="block";}
else{
	image11.style.display="block";
}  
	}if(round==3){
		computer++;
		if(image11.style.display=="block" || image22.style.display=="block"){
image11.style.display="none";
image22.style.display="none";
image33.style.display="block";}
else{
	image33.style.display="block";
}  

	}
	if(round==2){
	ties++;
	if(image11.style.display=="block" || image33.style.display=="block"){
image11.style.display="none";
image33.style.display="none";
image22.style.display="block";}
else{
	image22.style.display="block";
}

}
function six(){
	if(myscore==6 || computer==6){
	if(computer==6){
		document.getElementById("result").innerHTML="COMPUTER WON!!";
}
if(myscore==6){
	document.getElementById("result").innerHTML="YOU WON!!";
}
count=0;
myscore=0;
computer=0;
ties=0;

if(whole.style.display=="block"){
	whole.style.display="none";
	new1.style.display="block";}}
document.getElementById("ties").innerHTML=ties;
	document.getElementById("tries").innerHTML=count;

document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;}
	setTimeout(six,2000);
document.getElementById("tries").innerHTML=count;
	document.getElementById("ties").innerHTML=ties;
	document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;


}



function scissors(){
	var display=document.getElementById("whole");
var new1=document.getElementById("new1");
var image1=document.getElementById("image1");
var image2=document.getElementById("image2");
var image3=document.getElementById("image3");
 var image11=document.getElementById("image11");
var image22=document.getElementById("image22");
var image33=document.getElementById("image33");
if(image1.style.display=="block" || image2.style.display=="block"){
image1.style.display="none";
image2.style.display="none";
image3.style.display="block";}
else{
	image3.style.display="block";
}
	count++;
	var random=Math.random() * (3-1) + 1;
	var round=Math.round(random);
	console.log(round);
if(round==3){
	ties++;
	if(image11.style.display=="block" || image22.style.display=="block"){
image11.style.display="none";
image22.style.display="none";
image33.style.display="block";}
else{
	image33.style.display="block";
}  

}
	
	if(round==1){
		computer++;
		if(image22.style.display=="block" || image33.style.display=="block"){
image22.style.display="none";
image33.style.display="none";
image11.style.display="block";}
else{
	image11.style.display="block";
}

	}
	if(round==2){
		myscore++;
		if(image11.style.display=="block" || image33.style.display=="block"){
image11.style.display="none";
image33.style.display="none";
image22.style.display="block";}
else{
	image22.style.display="block";
}
	}

	function six(){
	if(myscore==6 || computer==6){
	if(computer==6){
		document.getElementById("result").innerHTML="COMPUTER WON!!";
}
if(myscore==6){
	document.getElementById("result").innerHTML="YOU WON!!";
}count=0;
myscore=0;
computer=0;
ties=0;

if(whole.style.display=="block"){
	whole.style.display="none";
	new1.style.display="block";}}
document.getElementById("ties").innerHTML=ties;
	document.getElementById("tries").innerHTML=count;

document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;}
	setTimeout(six,2000);
document.getElementById("tries").innerHTML=count;
	document.getElementById("ties").innerHTML=ties;
	document.getElementById("your").innerHTML=myscore;
document.getElementById("computer").innerHTML=computer;

}





