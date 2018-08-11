$(document).ready(function(){ 
$("#hot").fadeTo(0,0);
inputvalue=$('#temp_num').val();
var inputnum=parseInt(inputvalue); 
if($('#temp_num').val().search("^-?\\d+$") != 0){ 
return false; 
}else{ 
$("#Hgheader").html(inputvalue+"℃"); 
if(inputnum>=100){ 
inputnum=100; 
$('#temp_num').val(100) 
$("#Hgheader").html(100+"℃"); 
}else if(inputnum<=0){ 
inputnum=0; 
$('#temp_num').val(0) 
$("#Hgheader").html(0+"℃"); 
} 
} 
var Columnhe=inputnum/100; 
$("#Hg").animate({height:inputnum},'show'); 
$("#hot").fadeTo('slow',Columnhe); 
$('#temp, #temp_num').change(function(){ 
inputvalue=$('#temp_num').val();
var inputnum=parseInt(inputvalue); 
if($('#temp_num').val().search("^-?\\d+$") != 0){ 
return false; 
}else{ 
$("#Hgheader").html(inputvalue+"℃"); 
if(inputnum>=100){ 
inputnum=100; 
$('#temp_num').val(100) 
$("#Hgheader").html(100+"℃"); 
}else if(inputnum<=0){ 
inputnum=0; 
$('#temp_num').val(0) 
$("#Hgheader").html(0+"℃"); 
} 
} 
var Columnhe=inputnum/100; 
$("#Hg").animate({height:inputnum},'show'); 
$("#hot").fadeTo('slow',Columnhe);  
}); 
}); 