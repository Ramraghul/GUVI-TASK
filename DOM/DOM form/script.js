br = document.createElement("br");
p = document.createElement("P");
p1 = document.createElement("br");

let title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerHTML = "DOM MANIPULATION FORM";
document.head.append(title);

form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "p-5 ");
form.innerText = "DOM MANIPULATION FORM";
document.body.append(form);

div = document.createElement("div");
div.setAttribute("class", "form-group");
form.appendChild(div);

para = document.createElement("P");
para.setAttribute("id", "description");
para.innerText = "Task";
div.append(para);

let first = document.createElement("div");
first.innerText = "first name";

fname = document.createElement("input");
fname.setAttribute("type", "text");
fname.setAttribute("id", "first-name");
fname.setAttribute("required", "");
fname.setAttribute("placeholder", "firstName");

div.append(first);
div.append(fname);

let last = document.createElement("div");
last.innerText = "Last Name";

lname = document.createElement("input");
lname.setAttribute("type", "text");
lname.setAttribute("id", "last-name");
lname.setAttribute("required", "");
lname.setAttribute("placeholder", "lastName");

div.append(last);
div.append(lname);

add = document.createElement("div");
add.innerText = "Address";

address = document.createElement("textarea");
address.setAttribute("type", "text");
address.setAttribute("placeholder", "address");
address.setAttribute("id", "address");

div.append(add);
div.append(address);

pincode = document.createElement("div");
pincode.innerText = "Pincode";

pin = document.createElement("input");
pin.setAttribute("type", "text");
pin.setAttribute("id", "pincode");
pin.setAttribute("placeholder", "pincode");
pin.setAttribute("required", "");

div.append(pincode);
div.append(pin);

gender = document.createElement("div");
gender.innerText = "Gender";

gen = document.createElement("input");
gen.setAttribute("type", "radio");
gen.setAttribute("name", "gender");
gen.setAttribute("id", "male");

div.append(gender);
div.append(gen);
div.append("male");

gen1 = document.createElement("input");
gen1.setAttribute("type", "radio");
gen1.setAttribute("id", "female");
gen1.setAttribute("name", "gender");
div.append(gen1);
div.append("female");

food = document.createElement("div");
food.setAttribute("id", "food");
food.innerText = "Food Items";

sambar = document.createElement("input");
sambar.setAttribute("type", "checkbox");
sambar.setAttribute("id", "sambar");
sambar.setAttribute("name", "food");
sambar.innerText = "Sambar";

briyani = document.createElement("input");
briyani.setAttribute("type", "checkbox");
briyani.setAttribute("id", "briyani");
briyani.setAttribute("name", "food");
briyani.innerText = "briyani";

curd = document.createElement("input");
curd.setAttribute("type", "checkbox");
curd.setAttribute("id", "curd");
curd.setAttribute("name", "food");
curd.innerText = "curd";

veg = document.createElement("input");
veg.setAttribute("type", "checkbox");
veg.setAttribute("id", "veg");
veg.setAttribute("name", "food");
veg.innerText = "Veg";

snacks = document.createElement("input");
snacks.setAttribute("type", "checkbox");
snacks.setAttribute("id", "snacks");
snacks.setAttribute("name", "food");
snacks.innerText = "curd";

valid = document.createElement("input");

valid.setAttribute("type", "button");
valid.setAttribute("value", "click");

div.appendChild(food).append(p1);
div.appendChild(food).append(" Sambar ");
div.appendChild(food).appendChild(sambar);
div.appendChild(food).append("  Briyani  ");
div.appendChild(food).appendChild(briyani);
div.appendChild(food).append("  Curd  ");
div.appendChild(food).appendChild(curd);
div.appendChild(food).append("  Veg  ");
div.appendChild(food).appendChild(veg);
div.appendChild(food).append("  Snacks  ");
div.appendChild(food).appendChild(snacks);

div.appendChild(food).append(p);

state = document.createElement("div");
state.innerText = "State";

st = document.createElement("input");
st.setAttribute("type", "text");
st.setAttribute("id", "state");

div.append(state);
div.append(st);

country = document.createElement("div");
country.innerText = "country";

coun = document.createElement("input");
coun.setAttribute("type", "text");
coun.setAttribute("id", "country");

div.append(country);
div.append(coun);

button = document.createElement("button");
button.setAttribute("id", "submit");
button.setAttribute("name", "submit");
button.setAttribute("class", "btn btn-primary");
button.innerText = "Submit";

div.append(br);

div.append(button);

let btn = document.getElementById("submit").addEventListener("click", validate);

let table = document.createElement("table");
table.setAttribute("class", "table");
document.body.appendChild(table);

let thead = document.createElement("thead");
table.appendChild(thead);

let tablerow1 = document.createElement("tr");
thead.appendChild(tablerow1);

let tableheadingf = document.createElement("th");
tableheadingf.innerText = "Firstname";
tablerow1.appendChild(tableheadingf);

let tableheadingl = document.createElement("th");
tableheadingl.innerText = "lastname";
tablerow1.appendChild(tableheadingl);

let tableheadingg = document.createElement("th");
tableheadingg.innerText = "Gender";
tablerow1.appendChild(tableheadingg);

let tableheadinga = document.createElement("th");
tableheadinga.innerText = "Address";
tablerow1.appendChild(tableheadinga);

let tableheadingp = document.createElement("th");
tableheadingp.innerText = "Pincode";
tablerow1.appendChild(tableheadingp);

let tableheadingfo = document.createElement("th");
tableheadingfo.innerText = "Selected Food";
tablerow1.appendChild(tableheadingfo);

let tableheadings = document.createElement("th");
tableheadings.innerText = "State";
tablerow1.appendChild(tableheadings);

let tableheadingc = document.createElement("th");
tableheadingc.innerText = "Country";
tablerow1.appendChild(tableheadingc);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

let tablerow2 = document.createElement("tr");
tbody.appendChild(tablerow2);

let tablerowf = document.createElement("td");
tablerowf.setAttribute("id", "tr1");

tablerow2.appendChild(tablerowf);

let tablerowl = document.createElement("td");
tablerowl.setAttribute("id", "tr2");
tablerow2.appendChild(tablerowl);

let tablerowg = document.createElement("td");
tablerowg.setAttribute("id", "tr3");
tablerow2.appendChild(tablerowg);

let tablerowa = document.createElement("td");
tablerowa.setAttribute("id", "tr4");
tablerow2.appendChild(tablerowa);

let tablerowp = document.createElement("td");
tablerowp.setAttribute("id", "tr5");
tablerow2.appendChild(tablerowp);

let tablerowfo = document.createElement("td");
tablerowfo.setAttribute("id", "tr6");
tablerow2.appendChild(tablerowfo);

let tablerows = document.createElement("td");
tablerows.setAttribute("id", "tr7");
tablerow2.appendChild(tablerows);

let tablerowc = document.createElement("td");
tablerowc.setAttribute("id", "tr8");
tablerow2.appendChild(tablerowc);

function validate(event) {
  event.preventDefault();

  fa = document.getElementById("first-name").value;
  ln = document.getElementById("last-name").value;
  a = document.getElementById("address").value;
  pa = document.getElementById("pincode").value;

  var g;
  g1 = document.getElementById("male");
  g2 = document.getElementById("female");
  if (g1.checked == true) {
    console.log("female");
    g = "male";
  } else if (g2.checked == true) {
    console.log("male");
    g = "female";
  } else {
    g = "";
  }

  str = "";

  f1 = document.getElementById("briyani").value;
  f2 = document.getElementById("sambar").value;
  f3 = document.getElementById("curd").value;
  f4 = document.getElementById("veg").value;
  f5 = document.getElementById("snacks").value;

  if (briyani.checked == true) {
    str += "Briyani ";
  }
  if (sambar.checked == true) {
    str += "Sambar ";
  }
  if (curd.checked == true) {
    str += "Curd ";
  }
  if (veg.checked == true) {
    str += "Veg ";
  }
  if (snacks.checked == true) {
    str += "Snacks";
  }

  s = document.getElementById("state").value;
  c = document.getElementById("country").value;
  console.log(ln);
  console.log(fa);
  console.log(a);
  console.log(pa);
  console.log(g);
  console.log(str);

  document.getElementById("tr1").innerHTML = fa;
  document.getElementById("tr2").innerHTML = ln;
  document.getElementById("tr3").innerHTML = g;
  document.getElementById("tr4").innerHTML = pa;
  document.getElementById("tr5").innerHTML = a;
  document.getElementById("tr6").innerHTML = str;
  document.getElementById("tr7").innerHTML = s;
  document.getElementById("tr8").innerHTML = c;
}
