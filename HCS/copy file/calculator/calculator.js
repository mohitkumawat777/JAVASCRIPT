let no7=null,no8=null,no9=null,div=null,no4=null,no5=null,no6=null,
multi=null,no1=null,no2=null,no3=null,add=null,
no0=null,sub=null,equal,anser,display;
equal=no7+no8+no9+div+no4+no5+no6+multi+no1+no2+no3+add+no0+sub;
// equal.repalce('null','0');
document.getElementById("display").textContent=equal;
document.getElementById("no7").onclick=function(){
no7=document.getElementById("display").textContent="7";
}
document.getElementById("no8").onclick=function(){
no8=document.getElementById("display").textContent="8";
}
document.getElementById("no9").onclick=function(){
no9=document.getElementById("display").textContent="9";
}
document.getElementById("div").onclick=function(){
div=document.getElementById("display").textContent="/";
}
document.getElementById("no4").onclick=function(){
no4=document.getElementById("display").textContent="4";
}
document.getElementById("no5").onclick=function(){
no5=document.getElementById("display").textContent="5";
}
document.getElementById("no6").onclick=function(){
no6=document.getElementById("display").textContent="6";
}
document.getElementById("multi").onclick=function(){
multi=document.getElementById("display").textContent="x";
}
document.getElementById("no1").onclick=function(){
no1=document.getElementById("display").textContent="1";
}
document.getElementById("no2").onclick=function(){
no2=document.getElementById("display").textContent="2";
}
document.getElementById("no3").onclick=function(){
no3=document.getElementById("display").textContent="3";
}
document.getElementById("add").onclick=function(){
add=document.getElementById("display").textContent="+";
}
document.getElementById("no0").onclick=function(){
no0=document.getElementById("display").textContent="0";
}
document.getElementById("sub").onclick=function(){
sub=document.getElementById("display").textContent="-";
}
document.getElementById("equal").onclick=function(){
equal=document.getElementById("display").textContent="";
}
