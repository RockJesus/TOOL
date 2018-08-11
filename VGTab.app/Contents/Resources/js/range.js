function getWord(d,n,e){
  if(parseInt(e)>parseInt("100")&&parseInt(e)<parseInt("2000")){
    if(d=="3"){
      $("#num_"+d+"_"+n).val(e);
      $("#rag_"+d+"_"+n).val(e);
      myChart.options.annotation.annotations[0].value = e;
      myChart.update();
    }else{
     $("#num_"+d+"_"+n).val(e);
    $("#rag_"+d+"_"+n).val(e);
    myChart.data.datasets[d].data[n] = e;
    myChart.update(); 
    }
}}
function valSync(name,valu,min,max){
  if(parseInt(valu)>parseInt(min)&&parseInt(valu)<parseInt(max)){
    $("#"+name).val(valu);
    $("#"+name+"_num").val(valu);
}}
function hide(){
  var div=document.getElementById("select").value;
  document.getElementById("cf").style.display="none";
  document.getElementById("cv").style.display="none";
  document.getElementById("mf").style.display="none";
  document.getElementById("mv").style.display="none";
  document.getElementById(div).style.cssText="display: inline,text-align: center";
}