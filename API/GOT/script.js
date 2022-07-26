//Game of theron's API
function next(){
    async function motivation(){
        let step = await fetch("https://api.gameofthronesquotes.xyz/v1/random")
        let receive = await step.json()
        let name = receive.character.name
        let slug = receive.character.slug
        let message = receive.sentence
        document.getElementById("message").innerHTML=`<h5>Name : ${name}</h5><h5>Slug : ${slug}</h5><h5>Message : <h5><h4>"${message}"</h4>`
        
    }
    motivation()
}