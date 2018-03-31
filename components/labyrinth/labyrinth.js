function Labyrinth(container) {
    this.container = container
    this.labyrinth = null
}

let lprt = Labyrinth.prototype
lprt.CLASS_NAME = "labyrinth"

lprt.render = function () {

    this.labyrinthEl = document.createElement("div")
    this.labyrinthEl.className = this.CLASS_NAME
    this.container.appendChild(this.labyrinthEl)
    let humanEl = new Human().render()
    let mapEl = new Map().render()
    this.labyrinthEl.appendChild(humanEl)
    this.labyrinthEl.appendChild(mapEl)
}

lprt = null
