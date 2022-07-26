//title
let h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.setAttribute("class","text-center")
h1.innerHTML = "REST COUNTRY'S & WEATHER API"
document.body.append(h1)

//container
let container = document.createElement("div")
container.setAttribute("class","container")
container.setAttribute("id","hidden")
document.body.append(container)

//adding row
let row = document.createElement("div")
row.classList.add("row")
container.append(row)

//Get all country detail using fetch()
async function getCountries(){
  const all = await fetch("https://restcountries.com/v3.1/all");
    const data = await all.json()

   
    for(count of data){
      let name = count.name.common;
      let flag = count.flags.png;
      let capital = count.capital[0];
      let region = count.region;
      let cc= count.cca2;
      let latling = count.latlng[0];
      let latling1 = count.latlng[1];

      //card Adding
      let Column = document.createElement("div")
      Column.setAttribute("class","col-sm-6 col-md-4 col-lg-4 col-xl-4")
      row.append(Column)
      
      let card =document.createElement("div")
      card.setAttribute("class","card h-100")
      card.setAttribute("style","width: 18rem;")
      Column.append(card)

      let head = document.createElement("div")
      head.setAttribute("class","card-header text-center")
      head.innerHTML =`<h3>${name}</h3>`
      card.append(head)

      let flage = document.createElement("img")
      flage.setAttribute("src",`${flag}`)
      flage.setAttribute("class","card-img-top")
      card.append(flage)

      let body = document.createElement("div")
      body.setAttribute("class","card-body text-center")
      card.append(body)

      let cardtext = document.createElement("div")
      cardtext.setAttribute("class","card-text")
      body.append(cardtext)

      let list1 = document.createElement("h6")
      list1.innerText = `Capital : ${capital}`
      cardtext.append(list1)

      let list2 = document.createElement("h6")
      list2.innerText = `Region : ${region}`
      cardtext.append(list2)

      let list3 = document.createElement("h6")
      list3.innerText = `Country Code : ${cc}`
      cardtext.append(list3)

      let list4 = document.createElement("h6")
      list4.innerText = `Latlng : ${latling},${latling1}`
      cardtext.append(list4)

      let button = document.createElement("button")
      button.setAttribute("class","btn btn-primary mt-3")
      button.innerText = "click for weather"
      cardtext.append(button)

      //Get weather detail via using latlng
      const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latling}&lon=${latling1}&appid=d2e8b26f4c431c3e787138578a2f06c7&units=metric`);
      const data2 = await res2.json();
      button.addEventListener("click", weather);
      function weather(){
        document.getElementById("hidden").innerHTML = ""

        //create card
        let row = document.createElement("div")
        row.classList.add("row","g-3","container")
        container.append(row)

        let Column = document.createElement("div")
        Column.setAttribute("class","col col-lg-4 col-sm-12")
        row.append(Column)

        let card =document.createElement("div")
        card.setAttribute("class","card h-100")
        card.setAttribute("style","width: 18rem;")
        Column.append(card)

        let head = document.createElement("div")
        head.setAttribute("class","card-header text-center")
        head.innerHTML =`<h3>${name}</h3>`
        card.append(head)

        let flage = document.createElement("img")
        flage.setAttribute("src",`${flag}`)
        flage.setAttribute("class","card-img-top")
        card.append(flage)

        let body = document.createElement("div")
        body.setAttribute("class","card-body text-center")
        card.append(body)

        let list1 = document.createElement("h6")
        list1.innerText = `Weather : ${data2.weather[0].main}`
        body.append(list1)

      let list2 = document.createElement("h6")
      list2.innerText = `Temperature : ${data2.main.temp}`
      body.append(list2)

      let list3 = document.createElement("h6")
      list3.innerText = `Wind Speed : ${data2.wind.speed}`
      body.append(list3)

      let button1 = document.createElement("button")
      button1.setAttribute("class","btn btn-primary")
      button1.innerText = "Reset"
      body.append(button1)

      //Location reset
      button1.addEventListener("click",()=>{
        location.reload()
      })
      
      }
    }
}
getCountries()
    
