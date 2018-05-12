function Labyrinth(container) {
    this.container = container
    this.labyrinth = null
    this.ctx = null
    this.canvas = null
    /* this.blockSize = null */
    this.lengthMap = 6
    this.heightMap = 4
    this.mapEl = null
    this.humanEl = null
    this.updateLabyrinth = this.updateLabyrinth.bind(this)
    this.x = 0
    this.y = 0
    this.go = this.go.bind(this)
}

let lprt = Labyrinth.prototype
lprt.CLASS_NAME = "labyrinth"

lprt.render = function () {

    this.labyrinthEl = document.createElement("div")
    this.labyrinthEl.className = this.CLASS_NAME
    this.container.appendChild(this.labyrinthEl)
    this.makeCanvas()
    this.humanEl = new Human(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.width, this.height, this.updateLabyrinth, this.x, this.y, this.go).render()
    this.mapEl = new Map(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.x, this.y/* this.updateLabyrinth */).render()
    this.labyrinthEl.appendChild(this.humanEl)
    this.labyrinthEl.appendChild(this.mapEl)
}

lprt.makeCanvas = function () {
    //канва
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    /* this.labyrinthEl.appendChild(canvas) */

    // Получаем ширину и высоту элемента canvas
    this.width = canvas.width
    this.height = canvas.height
    //высота и ширина в блоках
    this.blockSize = 50

    /* canvas.width = this.lengthMap * this.blockSize
    canvas.height = this.heightMap * this.blockSize */

    var widthInBlocks = this.width / this.blockSize
    var heightInBlocks = this.height / this.blockSize
}

lprt.go = function (event) {
    switch (event.target.data) {
        case Navigator.prototype.NORTHWEST:
            this.x -= 1
            this.y -= 1
            break;
        case Navigator.prototype.NORTH:
            this.y -= 1
            break;
        case Navigator.prototype.NORTHEAST:
            this.x += 1
            this.y -= 1
            break;
        case Navigator.prototype.WEST:
            this.x -= 1
            break;
        case Navigator.prototype.EAST:
            this.x += 1
            this.y -= 1
            break;
        case Navigator.prototype.SOUTHWEST:
            this.x -= 1
            this.y += 1
            break;
        case Navigator.prototype.SOUTH:
            this.y += 1
            break;

        case Navigator.prototype.SOUTHEAST:
            this.x += 1
            this.y += 1
            break;
    }

    //пока не буду выводить на консоль, т.к.этот метод пока лежит в хумане
    /* this._outputToConsoleCharacterAndCoordinates() */
    this.updateLabyrinth()
}

// зачем я обновляю целый лабиринт ?!
lprt.updateLabyrinth = function (/* event */) {
    this.ctx.clearRect(0, 0, this.width, this.height)
    /* this.labyrinthEl.removeChild(this.humanEl) */
    this.labyrinthEl.removeChild(this.mapEl)
    /* this.humanEl = new Human(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.width, this.height, this.updateLabyrinth, this.x, this.y, this.go).render() */
    this.mapEl = new Map(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.x, this.y).render()
    /* this.labyrinthEl.appendChild(this.humanEl) */
    this.labyrinthEl.appendChild(this.mapEl)

}

lprt = null
