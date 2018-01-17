function Human(container, name, age, gender, race, skill, x, y) {
    this.container = container
    this.name = name
    this.age = age
    this.gender = gender
    this.race = race
    this.skill = skill
    this.x = 0
    this.y = 0
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
    //Рисуем кнопки
    let attributionEl = document.createElement("div")
    attributionEl.id = "attribution"
    attributionEl.innerHTML = "Данные персонажа"
    this.container.appendChild(attributionEl)
    //Делаю форму
    let attributionElForm = document.createElement("form")
    attributionEl.appendChild(attributionElForm)
    attributionElForm.className = "form"

    // Строка изменить имя
    this.nameEl = document.createElement("input")
    this.nameEl.placeholder = "Введите имя персонажа"
    this.nameEl.className = "row"
    attributionElForm.appendChild(this.nameEl)
    //Строка изменить возраст
    this.ageEl = document.createElement("input")
    this.ageEl.placeholder = "Введите возраст персонажа"
    this.ageEl.className = "row"
    attributionElForm.appendChild(this.ageEl)
    //Строка изменить пол
    this.genderEl = document.createElement("input")
    this.genderEl.placeholder = "Введите пол персонажа"
    this.genderEl.className = "row"
    attributionElForm.appendChild(this.genderEl)
    //Строка изменить рассу
    this.raceEl = document.createElement("input")
    this.raceEl.placeholder = "Введите рассу персонажа"
    this.raceEl.className = "row"
    attributionElForm.appendChild(this.raceEl)
    //Строка изменить навык
    this.skillEl = document.createElement("input")
    this.skillEl.placeholder = "Введите навык персонажа"
    this.skillEl.className = "row"
    attributionElForm.appendChild(this.skillEl)

    //Кнопка "Ок!"
    let elButton = document.createElement("button")
    elButton.innerHTML = "Ok!"
    elButton.type = "button"
    elButton.className = "row"
    attributionElForm.appendChild(elButton)
    elButton.addEventListener("click", this.onElButtonClick)


    //Делаем навигатор
    let navigatorEl = document.createElement("div")
    navigatorEl.id = "navigator"
    /*navigatorEl.innerHTML = "Путь персонажа"*/
    /*navigatorEl.className = this.CLASS_NAME*/
    this.container.appendChild(navigatorEl)

    //Строчка первая кубика    
    let goNorthWestEL = document.createElement("div")
    goNorthWestEL.innerHTML = "NW"
    goNorthWestEL.className = "arrow"
    navigatorEl.appendChild(goNorthWestEL)
    goNorthWestEL.addEventListener("click", this.goNorthWest)

    let goNorthEl = document.createElement("div")
    goNorthEl.innerHTML = "N"
    goNorthEl.className = "arrow"
    navigatorEl.appendChild(goNorthEl)
    //делаю обработчик щелчка по диву N
    goNorthEl.addEventListener("click", this.goNorth)

    let goNortheEastEl = document.createElement("div")
    goNortheEastEl.innerHTML = "NE"
    goNortheEastEl.className = "arrow"
    navigatorEl.appendChild(goNortheEastEl)
    goNortheEastEl.addEventListener("click", this.goNortheEast)

    // Строчка вторая кубика
    let goWestEl = document.createElement("div")
    goWestEl.innerHTML = "W"
    goWestEl.className = "arrow"
    navigatorEl.appendChild(goWestEl)
    goWestEl.addEventListener("click", this.goWest)

    let goEmptyEl = document.createElement("div")
    goEmptyEl.innerHTML = ""
    goEmptyEl.className = "arrow"
    navigatorEl.appendChild(goEmptyEl)

    let goEastEl = document.createElement("div")
    goEastEl.innerHTML = "E"
    goEastEl.className = "arrow"
    navigatorEl.appendChild(goEastEl)
    goEastEl.addEventListener("click", this.goEast)

    //Строчка третья кубика
    let goSouthWestEl = document.createElement("div")
    goSouthWestEl.innerHTML = "SW"
    goSouthWestEl.className = "arrow"
    navigatorEl.appendChild(goSouthWestEl)
    goSouthWestEl.addEventListener("click", this.goSouthWest)

    let goSouthEl = document.createElement("div")
    goSouthEl.innerHTML = "S"
    goSouthEl.className = "arrow"
    navigatorEl.appendChild(goSouthEl)
    goSouthEl.addEventListener("click", this.goSouth)

    let goSouthEastEL = document.createElement("div")
    goSouthEastEL.innerHTML = "SE"
    goSouthEastEL.className = "arrow"
    navigatorEl.appendChild(goSouthEastEL)
    goSouthEastEL.addEventListener("click", this.goSouthEast)
}


hprt.onElButtonClick = function () {
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
    }

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