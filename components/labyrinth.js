function Labyrinth(container) {
    this.container = container
}

let lprt = Labyrinth.prototype
lprt.CLASS_NAME = "labyrinth"

lprt.render = function () {
    let labyrinthEl = document.createElement("div")
    labyrinthEl.className = this.CLASS_NAME
    this.container.appendChild(labyrinthEl)

    //делаю элемент человек
    let humanEl = new Human(labyrinthEl,"Robin",18,"man","dutsh","baker").render()
    

}

lprt = null
