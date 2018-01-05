var person = null

function init() {
    person = new Human("Robin", 18, "man", "dutsh", "baker")
    
    navigator = new Human (container,"Robin", 18, "man", "dutsh", "baker").render()
   
}
window.onload = init
