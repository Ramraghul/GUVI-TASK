//Random Joke API
function clock(){
    document.getElementsByClassName("content")[0].innerHTML = ""
    async function stress(){
        let first = await fetch("https://geek-jokes.sameerkumar.website/api?format=json")
        let second = await first.json()
        let display = second.joke
        document.getElementsByClassName("content")[0].innerHTML= `<strong>${display}</strong>`
    }
    stress()
}
