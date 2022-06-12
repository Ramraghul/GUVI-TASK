function num(val) 
{ 
document.getElementById("result").value+=val 
}  
function solve() 
{ 
let x = document.getElementById("result").value 
let y = eval(x) 
document.getElementById("result").value = y 
} 
function clear() 
{ 
document.getElementById("result").value = "" 
} 
function AC()
{
document.getElementById("clear").value= ""
}