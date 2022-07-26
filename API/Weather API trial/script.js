//Navbar code
let one = document.createElement("nav");
one.setAttribute("class", "navbar bg-transparent container mt-1 rounded-4");
one.setAttribute("id", "nav");
one.innerHTML = `<div class="container">
<a class="navbar-brand text-white">Country Weather</a>
<form class="d-flex" role="search">
<input class="form-control me-2" id="receive" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-dark" onclick="clicked()" type="button" id="reset">Search</button>
</form>
</div><br/><br/>`;
document.body.append(one);

//Div code
let four = document.createElement("div");
four.setAttribute("id", "dic");
document.body.append(four);

//Get country names
function clicked() {
  const getAllCity = async () => {
    document.getElementById("dic").innerHTML=""
    const gather = document.getElementById("receive").value;
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${gather}?fullText=true`
    );
    const data = await res.json().then((data) => {
      let a = data[0].name.common;
      let b = data[0].flags.png;
      let c = data[0].capital[0];
      let e = data[0].region;
      let f = data[0].cca3;
      let l = data[0].latlng[0];
      let k = data[0].latlng[1];

      var isPresent = document.getElementById("card");
      if (isPresent) {
        isPresent.remove();
      }

      
      //Getting value assign
      let three = document.createElement("div");
      three.setAttribute("class", "card");
      three.setAttribute("style", "width: 18rem; height: 25rem;");
      three.setAttribute("id", "card");
      three.innerHTML = `<img src="${b}" class="card-img-top rounded-2" alt="image">
      <div class="card-body">
      <h4 class="card-title text-center">${a}</h4>
      <h6 class="card-text">Capital : ${c}</h6>
      <h6 class="card-text">Region : ${e}</h6>
      <h6 class="card-text">Country Code : ${f}</h6>
      <h6 class="card-text">latlng : ${l},${k}</h6>
      <button type="button" class="btn btn-light" id="detail">Click to Weather detail</button></div>
      <div id="cloud></div> <div id="delta"></div>`;
      four.append(three);

      //Getting value from LAT & Long
      document.getElementById("detail").addEventListener("click", () => {
        const getting = async () => {
          let getting1 = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${l}&lon=${k}&appid=d2e8b26f4c431c3e787138578a2f06c7`
          );
          let data = await getting1.json().then((data) => {
            let tempe = data.main.temp;
            let human = data.main.humidity;
            let weather5 = data.weather[0].description;
            let speed = data.wind.speed;

            var past = document.getElementById("card1");
            if (past) {
              past.remove();
            }

            //Getting value assign
            let six = document.createElement("div");
            six.setAttribute("id", "card1");
            six.innerHTML = `
                <div class="card text-white bg-transparent" style="width: 17rem; height: 10rem;">
                <div class="card-body">
                  <h3 class="card-text text-center">${a} Weather Condition</h3>
                  <h6 class="card-text mb-2">Weather : ${weather5}</h6>
                  <h6 class="card-text mb-2">Temperature : ${tempe} °F</h6>
                  <h6 class="card-text mb-2">Humanity : ${human} °F</h6>
                  <h6 class="card-text mb-2">Wind Speed :  ${speed}</h6>
                  <button type="button" class="btn btn-light" id="fine">OK</button>
                </div>
              </div>`;
            four.append(six);

            //Clear all data point
            document.getElementById("fine").addEventListener("click", () => {
              location.reload();
            });
          });
        };
        getting();
      });
    });
  };
  getAllCity();
}
