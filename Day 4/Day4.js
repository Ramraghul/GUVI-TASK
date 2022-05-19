// 1)How to compare two JSON have the same properties without order
var obj1 = { name: "Person 1", age:5 };

var obj2 = { age:5, name: "Person 1" };

var nameComp = obj1.name && obj2.age;

var ageComp = (obj1.name && obj2.age);

var compObj = (nameComp == ageComp)

if(compObj){

    console.log("Comparatively both objects are same")

}else{
    console.log("Both objects has different data.")
}

// Output:
// Comparatively both objects are same

// 2)To display all country fags in console

var xhr = new XMLHttpRequest();
xhr.onload = function() {
if(xhr.status>= 0 && xhr.status < 300){
var t = JSON.parse(this.response);
t.forEach(element =>{
 for(let key in t){
 console.log(t[key].fag)
 }
});
}
else
{
console.log(xhr.responseText);
}
};
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();
// displays fags of all countries in console


// 3.to display all countries name,reguon,subregion,population
// code::

var xhr = new XMLHttpRequest();
xhr.onload = function(){
if(xhr.status>= 0 && xhr.status < 300){
var t = JSON.parse(this.response);
t.forEach(element =>{
 for(let key in t){
 console.log(t[key].name)
 console.log(t[key].region)
 console.log(t[key].subregion)
 console.log(t[key].population)
 }
});
}
else
{
console.log(xhr.responseText);
}
};
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();
