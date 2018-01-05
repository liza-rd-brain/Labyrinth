function Human(container, name, age, gender, race, skill, x, y) {
    this.container = container
    this.name = name
    this.age = age
    this.gender = gender
    this.race = race
    this.skill = skill
    this.x = 0
    this.y = 0
    this.goNorth = this.goNorth.bind(this)
}

let hprt = Human.prototype
hprt.CLASS_NAME = "human"

hprt.setName = function (rename) {
    this.name = rename
}

hprt.setAge = function (reage) {
    this.age = reage
}

hprt.setGender = function (regender) {
    this.gender = regender
}

hprt.setRace = function (rerace) {
    this.race = rerace
}

hprt.setSkill = function (reskill) {
    this.skill = reskill
}

hprt.render = function () {
    let navigatorEl = document.createElement("div")
    navigatorEl.id = "navigator"
    /*navigatorEl.className = this.CLASS_NAME*/
    this.container.appendChild(navigatorEl)

    let rowEl1 = document.createElement("div")
    rowEl1.className = "row"
    navigatorEl.appendChild(rowEl1)

    let goNorthWestEL = document.createElement("div")
    goNorthWestEL.innerHTML = "NW"
    goNorthWestEL.className = "arrow"
    rowEl1.appendChild(goNorthWestEL)

    let goNorthEl = document.createElement("div")
    goNorthEl.innerHTML = "N"
    goNorthEl.className = "arrow"
    rowEl1.appendChild(goNorthEl)
    //делаю обработчик щелчка по диву N
    goNorthEl.onclick = this.goNorth


    let goNortheEastEl = document.createElement("div")
    goNortheEastEl.innerHTML = "NE"
    goNortheEastEl.className = "arrow"
    rowEl1.appendChild(goNortheEastEl)


    let rowEl2 = document.createElement("div")
    rowEl2.className = "row"
    navigatorEl.appendChild(rowEl2)

    let goWestEl = document.createElement("div")
    goWestEl.innerHTML = "W"
    goWestEl.className = "arrow"
    rowEl2.appendChild(goWestEl)

    let goEmptyEl = document.createElement("div")
    goEmptyEl.innerHTML = ""
    goEmptyEl.className = "arrow"
    rowEl2.appendChild(goEmptyEl)


    let goEastEl = document.createElement("div")
    goEastEl.innerHTML = "E"
    goEastEl.className = "arrow"
    rowEl2.appendChild(goEastEl)

    let rowEl3 = document.createElement("div")
    rowEl3.className = "row"
    navigatorEl.appendChild(rowEl3)

    let goSouthWestEl = document.createElement("div")
    goSouthWestEl.innerHTML = "SW"
    goSouthWestEl.className = "arrow"
    rowEl3.appendChild(goSouthWestEl)

    let goSouthEl = document.createElement("div")
    goSouthEl.innerHTML = "S"
    goSouthEl.className = "arrow"
    rowEl3.appendChild(goSouthEl)

    let goSouthEastEL = document.createElement("div")
    goSouthEastEL.innerHTML = "SE"
    goSouthEastEL.className = "arrow"
    rowEl3.appendChild(goSouthEastEL)



}




hprt.goNorth = function () {
    this.y -= 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goNortheEast = function () {
    this.x += 1
    this.y -= 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goEast = function () {
    this.x += 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goSouthEast = function () {
    this.x += 1
    this.y += 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goSouth = function () {
    this.y += 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goSouthWest = function () {
    this.x -= 1
    this.y += 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goWest = function () {
    this.x -= 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt.goNorthWest = function () {
    this.x -= 1
    this.y -= 1
    console.groupCollapsed("Parsonage")
    console.log(
        this.name,
        this.age,
        this.gender,
        this.race,
        this.skill,
    )
    console.groupEnd()
    console.groupCollapsed("Coordinates")
    console.log(
        this.x,
        this.y,
    )
    console.groupEnd()
}

hprt = null