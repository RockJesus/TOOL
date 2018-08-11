window.onload = function(){
var n = 0;
setInterval(function(){
n++;
var fan_key=new Array("free_fan","down_fan","min_fan","max_fan");

for(var i = 0;i < fan_key.length; i++) {
	document.getElementById(fan_key[i]+"_icon").style.transform="rotate("+Math.ceil((document.getElementById(fan_key[i]).value/100))*n+"deg)";
}

},100);
}