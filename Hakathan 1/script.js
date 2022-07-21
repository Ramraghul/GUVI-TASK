    let video1 = document.createElement("video")
    // video1.muted= true
    video1.setAttribute("playslinline","playslinline")
    video1.setAttribute("autoplay","autoplay")
    video1.setAttribute("muted","muted")
    video1.setAttribute("loop","loop")
    video1.innerHTML =`<source src="./stuff/one.mp4" type="video/mp4">`
    document.body.append(video1)

    let two = document.createElement("nav")
    two.setAttribute("class","navbar bg-transparent fixed-top mt-4")
    two.innerHTML = `<div class="container">
    <a class="navbar-brand text-white" href="#">BREWERY</a>
    <form class="d-flex" role="search">
    <input class="form-control me-2 text-light bg-transparent" id="shope" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-info" id="click" type="button">Search</button>
    </form></div>`
    document.body.append(two)

    let three =document.createElement("div")
    three.setAttribute("class","card rounded-5")
    three.setAttribute("id","card")
    three.innerHTML = `<div class="card-body">
    <h1 class="card-title text-center">"'WELCOME"'</h1><br>
    <h5 class="card-title text-center">History of beer</h5><br>
    <div class="card-text">Beer may have been known in Neolithic Europe and was mainly brewed on a domestic scale.In some form, 
    it can be traced back almost 5000 years to Mesopotamian writings describing daily rations of beer and bread to workers. 
    Before the rise of production breweries, the production of beer took place at home and was the domain of women, 
    as baking and brewing were seen as "women's work".<div>
    </div>`
    document.body.append(three)

    document.getElementById("click").addEventListener("click",()=>{
        async function getshopdetail(){
            let shop = document.getElementById("shope").value
            let find = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${shop}`)
            let getting = await find.json()
            try {
                let name = getting[0].name
                let type = getting[0].brewery_type
                let street = getting[0].street
                let city = getting[0].city
                let country = getting[0].country
                let state = getting[0].state
                let pc = getting[0].postal_code
                let web = getting[0].website_url
                let contact = getting[0].phone

                document.getElementById("card").innerHTML =""
                document.getElementById("card").innerHTML = `<div class="card-body">
                <h2 class="card-title text-center" id="head">${name}</h2>
                <h5 class="card-text" id="num1">Type: ${type}</h5>
                <address><h5 class="card-text" id="num2">Address: ${street}</h5>
                <h5 class="card-text" id="num3">${city}</h5>
                <h5 class="card-text" id="num4">${country}</h5>
                <h5 class="card-text" id="num5">${state}</h5>
                <h5 class="card-text" id="num6">${pc}</h5></address>
                <a id="num7" href="${web}">${web}</a>
                <h5 class="card-text id="num8">Contact: ${contact}</h5>
                </div>`

            } catch (error) {
                document.getElementById("card").innerHTML =`<div class="card-body">
                <h1 class="card-title text-center text-warning"color>"'Sorry"'</h1><br>
                <div class="card-text">I can't find your Information & Please Enter the valid Name in search box<div>
                </div>`
                
            }
        }
        getshopdetail()
    })
