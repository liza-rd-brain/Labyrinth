function Human(container, name, age, gender, race, skill, x, y) {
    this.container = container
    this.name = name
    this.age = age
    this.gender = gender
    this.race = race
    this.skill = skill
    this.x = 0
    this.y = 0
    this.attributeEl = null
    this.nameEl = null
    this.ageEl = null
    this.genderEl = null
    this.raceEl = null
    this.skillEl = null
    //воспользовалась методом bind
    this.goNorth = this.goNorth.bind(this)
    this.goNorthWest = this.goNorthWest.bind(this)
    this.goNortheEast = this.goNortheEast.bind(this)
    this.goWest = this.goWest.bind(this)
    this.goEast = this.goEast.bind(this)
    this.goSouthWest = this.goSouthWest.bind(this)
    this.goSouth = this.goSouth.bind(this)
    this.goSouthEast = this.goSouthEast.bind(this)
    this.onElButtonClick = this.onElButtonClick.bind(this)
}

let hprt = Human.prototype
hprt.CLASS_NAME = "human"

//приватные методы, выводящий информацию на консоль
//Character
hprt._outputToConsoleCharacter = function () {
    console.groupCollapsed("Character")
    console.log(
        this.name, this.age, this.gender, this.race, this.skill,
    )
    console.groupEnd()
}

hprt._outputToConsoleCharacterAndCoordinates = function () {
    console.groupCollapsed("Character")
    console.log(
        this.name, this.age, this.gender, this.race, this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x, this.y,
    )
    console.groupEnd()
}

// в динамике рисуем элементы
hprt.render = function () {
    //рисуем элемент человек
    let humanEl = document.createElement("div")
    humanEl.className = this.CLASS_NAME
    this.container.appendChild(humanEl)

    //Рисуем атрибут
    let attributeEl = new Аttribute(
        humanEl,
        this.onElButtonClick
    )
        .render()

    //Рисуем навигатор
    let navigatorEl = new Navigator(
        humanEl,
        this.goNorthWest,
        this.goNorth,
        this.goNortheEast,
        this.goWest,
        this.goEast,
        this.goSouthWest,
        this.goSouth,
        this.goSouthEast
    )
        .render()
    //Рисуем карту
    let mapEl = new Map(humanEl).render()
}


hprt.onElButtonClick = function (event) {
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


    /*
        if (this.nameEl.value != "") {
            this.name = this.nameEl.value
        }
    
        if (this.ageEl.value != "") {
            this.age = this.ageEl.value
        }
    
        if (this.genderEl.value != "") {
            this.gender = this.genderEl.value
        }
    
        if (this.raceEl.value != "") {
            this.race = this.raceEl.value
        }
    
        if (this.skillEl.value != "") {
            this.skill = this.skillEl.value
        }*/

    this._outputToConsoleCharacter()
}


hprt.goNorth = function () {
    this.y -= 1
    this._outputToConsoleCharacterAndCoordinates()
}


hprt.goNortheEast = function () {
    this.x += 1
    this.y -= 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goEast = function () {
    this.x += 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goSouthEast = function () {
    this.x += 1
    this.y += 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goSouth = function () {
    this.y += 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goSouthWest = function () {
    this.x -= 1
    this.y += 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goWest = function () {
    this.x -= 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt.goNorthWest = function () {
    this.x -= 1
    this.y -= 1
    this._outputToConsoleCharacterAndCoordinates()
}

hprt = null