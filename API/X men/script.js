//title
let h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.setAttribute("class","text-center")
h1.innerHTML = "X MEN TEAM"
document.body.append(h1)

//container
let container = document.createElement("div")
container.setAttribute("class","container")
container.setAttribute("id","hidden")
document.body.append(container)

//adding row
let row = document.createElement("div")
row.classList.add("row","g-4")
container.append(row)

//Get all card using fetch()
async function getCountries(){
  const all = await fetch("https://xmenapiheroku.herokuapp.com/api/characters/");
    const data = await all.json()
    for(count of data.results){
      let name = count.name;
      let img = count.img;
      let alias = count.alias;
      let Power = count.powers[0];
      let team= count.affiliation;
      let description = count.description
  
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
      head.setAttribute("id","head")
      head.innerHTML =`<h3>${name}</h3>`
      card.append(head)

      let image = document.createElement("img")
      image.setAttribute("src",`${img}`)
      image.setAttribute("class","card-img-top")
      card.append(image)

      let body = document.createElement("div")
      body.setAttribute("class","card-body text-center")
      card.append(body)

      let cardtext = document.createElement("div")
      cardtext.setAttribute("class","card-text")
      body.append(cardtext)

      let list1 = document.createElement("h6")
      list1.innerText = `Alias : ${alias}`
      cardtext.append(list1)

      let list2 = document.createElement("h6")
      list2.innerText = `Super power : ${Power}`
      cardtext.append(list2)

      let list3 = document.createElement("h6")
      list3.innerText = `Affiliation : ${team}`
      cardtext.append(list3)

      let detail = document.createElement("p")
      detail.setAttribute("id","yellow")
      detail.innerHTML =`<b>Description : ${description}</b>`
      cardtext.append(detail)
    }
}
getCountries()