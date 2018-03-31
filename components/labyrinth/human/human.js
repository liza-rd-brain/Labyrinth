function Human() {
    this.onButtonElClick = this.onButtonElClick.bind(this)
    this.name = null
    this.ageEl = null
    this.genderEl = null
    this.raceEl = null
    this.skillEl = null
    this.x = 0
    this.y = 0
    this.go = this.go.bind(this)
    this.massivCharacter = [this.name, this.ageEl, this.genderEl, this.raceEl, this.skillEl]
    this.massivCoordinates = [this.x, this.y]
}

let hprt = Human.prototype
hprt.CLASS_NAME = "human"

hprt.render = function () {
    let humanEl = document.createElement("div")
    humanEl.className = this.CLASS_NAME
    //cписок атрбиутов
    let attributesListEl = new АttributesList(this.nameEl, this.onButtonElClick).render()
    humanEl.appendChild(attributesListEl)

    let navigatorEl = new Navigator(this.go).render()
    humanEl.appendChild(navigatorEl)
    return humanEl
}

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


    this._outputToConsoleCharacter()
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

hprt._outputToConsoleCharacter = function () {
    console.groupCollapsed("Character")
    console.log(
        this.name, this.age, this.gender, this.race, this.skill
    )
    console.groupEnd()
}

hprt._outputToConsoleCharacterAndCoordinates = function () {
    this._outputToConsoleCharacter()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x, this.y,
    )
    console.groupEnd()
}

hprt.go = function (event) {
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
}

hprt = null
