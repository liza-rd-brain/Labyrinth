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
    this.nameElButtonClick = this.nameElButtonClick.bind(this)
    this.ageElButtonClick = this.ageElButtonClick.bind(this)
    this.genderElButtonClick = this.genderElButtonClick.bind(this)
    this.raceElButtonClick = this.raceElButtonClick.bind(this)
    this.skillElButtonClick = this.skillElButtonClick.bind(this)
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

    // Кнопка изменить имя
    let attributionName = document.createElement("form")
    attributionEl.appendChild(attributionName)
    attributionName.className = "row"

    this.nameEl = document.createElement("input")
    this.nameEl.placeholder = "Введите имя персонажа"
    attributionName.appendChild(this.nameEl)

    let nameElButton = document.createElement("button")
    nameElButton.innerHTML = "Ok!"
    nameElButton.type = "button"
    attributionName.appendChild(nameElButton)
    nameElButton.addEventListener("click", this.nameElButtonClick)

    //Кнопка изменить возраст
    let attributionAge = document.createElement("form")
    attributionEl.appendChild(attributionAge)
    attributionAge.className = "row"

    this.ageEl = document.createElement("input")
    this.ageEl.placeholder = "Введите возраст персонажа"
    attributionAge.appendChild(this.ageEl)

    let ageElButton = document.createElement("button")
    ageElButton.innerHTML = "Ok!"
    ageElButton.type = "button"
    attributionAge.appendChild(ageElButton)
    ageElButton.addEventListener("click", this.ageElButtonClick)

    //Кнопка изменить пол
    let attributionGender = document.createElement("form")
    attributionEl.appendChild(attributionGender)
    attributionGender.className = "row"

    this.genderEl = document.createElement("input")
    this.genderEl.placeholder = "Введите пол персонажа"
    attributionGender.appendChild(this.genderEl)

    let genderElButton = document.createElement("button")
    genderElButton.innerHTML = "Ok!"
    genderElButton.type = "button"
    attributionGender.appendChild(genderElButton)
    genderElButton.addEventListener("click", this.genderElButtonClick)

    //Кнопка изменить рассу
    let attributionRace = document.createElement("form")
    attributionEl.appendChild(attributionRace)
    attributionRace.className = "row"

    this.raceEl = document.createElement("input")
    this.raceEl.placeholder = "Введите рассу персонажа"
    attributionRace.appendChild(this.raceEl)

    let raceElButton = document.createElement("button")
    raceElButton.innerHTML = "Ok!"
    raceElButton.type = "button"
    attributionRace.appendChild(raceElButton)
    raceElButton.addEventListener("click", this.raceElButtonClick)

    //Кнопка изменить навык
    let attributionSkill = document.createElement("form")
    attributionEl.appendChild(attributionSkill)
    attributionSkill.className = "row"

    this.skillEl = document.createElement("input")
    this.skillEl.placeholder = "Введите навык персонажа"
    attributionSkill.appendChild(this.skillEl)

    let skillElButton = document.createElement("button")
    skillElButton.innerHTML = "Ok!"
    skillElButton.type = "button"
    attributionSkill.appendChild(skillElButton)
    skillElButton.addEventListener("click", this.skillElButtonClick)

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


hprt.nameElButtonClick = function () {
    this.name = this.nameEl.value
    this._outputToConsoleCharacter()
}

hprt.ageElButtonClick = function () {
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