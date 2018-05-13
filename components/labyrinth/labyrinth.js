function Labyrinth(container) {
    this.container = container
    this.labyrinth = null
    this.ctx = null
    this.canvas = null
    this.lengthMap = 6
    this.heightMap = 4
    this.mapEl = null
    this.humanEl = null
    this.updateLabyrinth = this.updateLabyrinth.bind(this)
    this.x = 0
    this.y = 0
    this.startX = null
    this.startY = null
    this.name = null
    this.ageEl = null
    this.genderEl = null
    this.raceEl = null
    this.skillEl = null
    this.animationTime = 200
    this.go = this.go.bind(this)
    this.outputToConsoleCharacter = this.outputToConsoleCharacter.bind(this)
    this.outputToConsoleCharacterAndCoordinates = this.outputToConsoleCharacterAndCoordinates.bind(this)
    this.onButtonElClick = this.onButtonElClick.bind(this)
    this.landscape = ["ground", "grass", "water"]
    this.dataMap = new Array(this.lengthMap)
    for (i = 0; i < this.lengthMap; i++) {
        this.dataMap[i] = new Array(this.heightMap)
        for (j = 0; j < this.heightMap; j++) {
            this.dataMap[i][j] = this.landscape[Math.floor(Math.random() * this.landscape.length)]
        }
    }
}

let lprt = Labyrinth.prototype
lprt.CLASS_NAME = "labyrinth"

lprt.render = function () {
    this.labyrinthEl = document.createElement("div")
    this.labyrinthEl.className = this.CLASS_NAME
    this.container.appendChild(this.labyrinthEl)
    this.makeCanvas()
    this.humanEl = new Human(this.updateLabyrinth,
        this.x,
        this.y,
        this.name,
        this.ageEl,
        this.genderEl,
        this.raceEl,
        this.skillEl,
        this.go,
        this.outputToConsoleCharacterAndCoordinates,
        this.onButtonElClick).render()

    this.mapEl = new Map(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.x, this.y, this.dataMap).render()
    this.labyrinthEl.appendChild(this.humanEl)
    this.labyrinthEl.appendChild(this.mapEl)
}

lprt.makeCanvas = function () {
    //канва
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")

    // Получаем ширину и высоту элемента canvas
    this.width = canvas.width
    this.height = canvas.height
    //высота и ширина в блоках
    this.blockSize = 50

    var widthInBlocks = this.width / this.blockSize
    var heightInBlocks = this.height / this.blockSize
}

lprt.go = function (event) {
    this.startX = this.x
    this.startY = this.y
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

    this.outputToConsoleCharacterAndCoordinates()
    this.updateLabyrinth()
}



lprt.updateLabyrinth = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.labyrinthEl.removeChild(this.mapEl)
    this.mapEl = new Map(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.startX, this.startY, this.dataMap).render()
    this.labyrinthEl.appendChild(this.mapEl)
    var timeoutID = setTimeout(this.updateLabyrinth, this.animationTime)
    if (this.startX == this.x && this.startY == this.y) {
        clearTimeout(timeoutID)
    }
    this.startX += ((this.x - this.startX) / 10)
    this.startY += ((this.y - this.startY) / 10)
    
}





/*  this.ctx.clearRect(0, 0, this.width, this.height)
 this.labyrinthEl.removeChild(this.mapEl)
 this.mapEl = new Map(this.canvas, this.ctx, this.blockSize, this.lengthMap, this.heightMap, this.x, this.y, this.dataMap).render()
 this.labyrinthEl.appendChild(this.mapEl) */

lprt.onButtonElClick = function (event) {
    //если строка не пустая, то записываем значение
    //сделать массив, соответствующий коллекциии и в соответсвии значению одного массива ставить другое
    if (event.target.data[0].value != "") {
        this.name = event.target.data[0].value
    }
    if (event.target.data[1].value != "") {
        this.age = event.target.data[1].value
    }
    if (event.target.data[2].value != "") {
        this.gender = event.target.data[2].value
    }
    if (event.target.data[3].value != "") {
        this.race = event.target.data[3].value
    }
    if (event.target.data[4].value != "") {
        this.skill = event.target.data[4].value
    }
    this.outputToConsoleCharacterAndCoordinates()
}




lprt.outputToConsoleCharacter = function () {
    console.groupCollapsed("Character")
    console.log(
        this.name, this.age, this.gender, this.race, this.skill
    )
    console.groupEnd()
}

lprt.outputToConsoleCharacterAndCoordinates = function () {
    this.outputToConsoleCharacter()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x, this.y,
    )
    console.groupEnd()
}


lprt = null
