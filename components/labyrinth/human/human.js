function Human(canvas, ctx, blockSize, lengthMap, heightMap, width, height, updateLabyrinth, x, y, go) {
    this.canvas = canvas
    this.ctx = ctx
    this.blockSize = blockSize
    this.lengthMap = lengthMap
    this.heightMap = heightMap
    this.width = width
    this.height = height
    this.updateLabyrinth = updateLabyrinth
    this.x = x
    this.y = y
    this.go = go
    this.onButtonElClick = this.onButtonElClick.bind(this)
    this.name = null
    this.ageEl = null
    this.genderEl = null
    this.raceEl = null
    this.skillEl = null
    /*  this.x = 0
     this.y = 0 */
    /* this.go = this.go.bind(this) */
    /* this.drawHuman = this.drawHuman.bind(this) */
    this.massivCharacter = [this.name, this.ageEl, this.genderEl, this.raceEl, this.skillEl]
    this.massivCoordinates = [this.x, this.y]
}

let hprt = Human.prototype
hprt.CLASS_NAME = "human"


hprt.render = function () {
    let humanEl = document.createElement("div")
    humanEl.className = this.CLASS_NAME
    /* this.drawHuman() */
    //cписок атрбиутов
    let attributesListEl = new АttributesList(this.nameEl, this.onButtonElClick).render()
    humanEl.appendChild(attributesListEl)
    let navigatorEl = new Navigator(this.go).render()
    humanEl.appendChild(navigatorEl)
    return humanEl
}


//частный
/* hprt.circle = function (x, y, radius, fillCircle) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        this.ctx.fill()
    } else {
        this.ctx.stroke()
    }
} */

// /* //частный
// //нарисовать кружочек = человечка
// hprt.drawHuman = function () {
//     //с начальной рандомной позицией
//     /* var centerX = (Math.floor(Math.random() * this.lengthMap)) * this.blockSize + this.blockSize / 2
//     var centerY = (Math.floor(Math.random() * this.heightMap)) * this.blockSize + this.blockSize / 2 */
//     //в начале координат
//     var centerX = this.x * this.blockSize + this.blockSize / 2
//     var centerY = this.y * this.blockSize + this.blockSize / 2
//     this.ctx.fillStyle = "black"
//     this.circle(centerX, centerY, this.blockSize / 2, true)
// }

// //ВЫНЕСТИ В ЛАБИРИНТ
// //может вообще тогда вынести в го?!
// hprt.moveHuman = function () {
//     this.ctx.clearRect(0, 0, this.width, this.height)
//     this.drawHuman()

// } */
//?!
hprt.onButtonElClick = function (event) {
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

    //вариант упрощения кода
    /* for (i = 0; i <= 4; i++) {
        if (event.target.data[i].value != "") {
            this.name = event.target.data[0].value
            this.age = event.target.data[1].value
            this.gender = event.target.data[2].value
            this.race = event.target.data[3].value
            this.skill = event.target.data[4].value
        }

    } */


    /* this._outputToConsoleCharacter() */
    this._outputToConsoleCharacterAndCoordinates()
}
//приватные методы, выводящий информацию на консоль
//Character
//мысль сделать один метод - вывеение на консоль

//попробовать сделать перебор аргументов циклом for-!?
/* hprt._outputToConsole  = function(nameGroup,massivGroup){
    console.groupCollapsed(nameGroup)
    console.log(massivGroup)
    console.groupEnd()
} */

//частный
hprt._outputToConsoleCharacter = function () {
    console.groupCollapsed("Character")
    console.log(
        this.name, this.age, this.gender, this.race, this.skill
    )
    console.groupEnd()
}

//частный
hprt._outputToConsoleCharacterAndCoordinates = function () {
    this._outputToConsoleCharacter()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x, this.y,
    )
    console.groupEnd()
}

//ВЫНЕСТИ В ЛАБИРИНТ
//щелчок по кнопка= человек движется по карте
// а значит для динамики и карту нужно будет перерисовывать
/* hprt.go = function (event) {
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

    this._outputToConsoleCharacterAndCoordinates()
    this.updateLabyrinth()
    this.drawHuman()


} */

hprt = null
