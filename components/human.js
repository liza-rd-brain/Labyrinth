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
    /*this.ageElButtonClick = this.ageElButtonClick.bind(this)
    this.genderElButtonClick = this.genderElButtonClick.bind(this)
    this.raceElButtonClick = this.raceElButtonClick.bind(this)
    this.skillElButtonClick = this.skillElButtonClick.bind(this)*/
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
    //рисуем кнопки
    let attributionEl = document.createElement("div")
    attributionEl.id = "attribution"
    attributionEl.innerHTML = "Данные персонажа"
    this.container.appendChild(attributionEl)


    let attributionElForm = document.createElement("form")
    attributionEl.appendChild(attributionElForm)
    attributionElForm.className = "form"

    // Строка изменить имя
    this.nameEl = document.createElement("input")
    this.nameEl.placeholder = "Введите имя персонажа"
    attributionElForm.appendChild(this.nameEl)
    //Строка изменить возраст
    this.ageEl = document.createElement("input")
    this.ageEl.placeholder = "Введите возраст персонажа"
    attributionElForm.appendChild(this.ageEl)
    //Строка изменить пол
    this.genderEl = document.createElement("input")
    this.genderEl.placeholder = "Введите пол персонажа"
    attributionElForm.appendChild(this.genderEl)
    //Строка изменить рассу
    this.raceEl = document.createElement("input")
    this.raceEl.placeholder = "Введите рассу персонажа"
    attributionElForm.appendChild(this.raceEl)
    //Строка изменить навык
    this.skillEl = document.createElement("input")
    this.skillEl.placeholder = "Введите навык персонажа"
    attributionElForm.appendChild(this.skillEl)


    let elButton = document.createElement("button")
    elButton.innerHTML = "Ok!"
    elButton.type = "button"
    attributionElForm.appendChild(elButton)
    elButton.addEventListener("click", this.onElButtonClick)



    /* let ageElButton = document.createElement("button")
     ageElButton.innerHTML = "Ok!"
     ageElButton.type = "button"
     attributionElForm.appendChild(ageElButton)
     ageElButton.addEventListener("click", this.ageElButtonClick)*/


    /* let genderElButton = document.createElement("button")
     genderElButton.innerHTML = "Ok!"
     genderElButton.type = "button"
     attributionElForm.appendChild(genderElButton)
     genderElButton.addEventListener("click", this.genderElButtonClick)*/



    /*let raceElButton = document.createElement("button")
    raceElButton.innerHTML = "Ok!"
    raceElButton.type = "button"
    attributionElForm.appendChild(raceElButton)
    raceElButton.addEventListener("click", this.raceElButtonClick)*/


    /*let skillElButton = document.createElement("button")
    skillElButton.innerHTML = "Ok!"
    skillElButton.type = "button"
    attributionElForm.appendChild(skillElButton)
    skillElButton.addEventListener("click", this.skillElButtonClick)*/



    //Делаем навигатор
    let navigatorEl = document.createElement("div")
    navigatorEl.id = "navigator"
    navigatorEl.innerHTML = "Путь персонажа"
    /*navigatorEl.className = this.CLASS_NAME*/
    this.container.appendChild(navigatorEl)

    //Строчка первая кубика    
    let rowEl1 = document.createElement("div")
    rowEl1.className = "row"
    navigatorEl.appendChild(rowEl1)

    let goNorthWestEL = document.createElement("div")
    goNorthWestEL.innerHTML = "NW"
    goNorthWestEL.className = "arrow"
    rowEl1.appendChild(goNorthWestEL)
    goNorthWestEL.addEventListener("click", this.goNorthWest)

    let goNorthEl = document.createElement("div")
    goNorthEl.innerHTML = "N"
    goNorthEl.className = "arrow"
    rowEl1.appendChild(goNorthEl)
    //делаю обработчик щелчка по диву N
    goNorthEl.addEventListener("click", this.goNorth)

    let goNortheEastEl = document.createElement("div")
    goNortheEastEl.innerHTML = "NE"
    goNortheEastEl.className = "arrow"
    rowEl1.appendChild(goNortheEastEl)
    goNortheEastEl.addEventListener("click", this.goNortheEast)

    // Строчка вторая кубика
    let rowEl2 = document.createElement("div")
    rowEl2.className = "row"
    navigatorEl.appendChild(rowEl2)

    let goWestEl = document.createElement("div")
    goWestEl.innerHTML = "W"
    goWestEl.className = "arrow"
    rowEl2.appendChild(goWestEl)
    goWestEl.addEventListener("click", this.goWest)

    let goEmptyEl = document.createElement("div")
    goEmptyEl.innerHTML = ""
    goEmptyEl.className = "arrow"
    rowEl2.appendChild(goEmptyEl)

    let goEastEl = document.createElement("div")
    goEastEl.innerHTML = "E"
    goEastEl.className = "arrow"
    rowEl2.appendChild(goEastEl)
    goEastEl.addEventListener("click", this.goEast)

    //Строчка третья кубика
    let rowEl3 = document.createElement("div")
    rowEl3.className = "row"
    navigatorEl.appendChild(rowEl3)

    let goSouthWestEl = document.createElement("div")
    goSouthWestEl.innerHTML = "SW"
    goSouthWestEl.className = "arrow"
    rowEl3.appendChild(goSouthWestEl)
    goSouthWestEl.addEventListener("click", this.goSouthWest)

    let goSouthEl = document.createElement("div")
    goSouthEl.innerHTML = "S"
    goSouthEl.className = "arrow"
    rowEl3.appendChild(goSouthEl)
    goSouthEl.addEventListener("click", this.goSouth)

    let goSouthEastEL = document.createElement("div")
    goSouthEastEL.innerHTML = "SE"
    goSouthEastEL.className = "arrow"
    rowEl3.appendChild(goSouthEastEL)
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

/*hprt.ageElButtonClick = function () {
    this.age = this.ageEl.value
    this._outputToConsoleCharacter()
}

hprt.genderElButtonClick = function () {
    this.gender = this.genderEl.value
    this._outputToConsoleCharacter()
}

hprt.raceElButtonClick = function () {
    this.race = this.raceEl.value
    this._outputToConsoleCharacter()
}

hprt.skillElButtonClick = function () {
    this.skill = this.skillEl.value
    this._outputToConsoleCharacter()
}*/

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