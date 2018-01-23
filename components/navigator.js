function Navigator(humanEl, parent) {
    this.humanEl = humanEl
    this.parent = parent

}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"

nprt.render = function () {
    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME
    this.humanEl.appendChild(navigatorEl)

    /*
    //разобраться как красиво в гриде показать
    let navigatorTitleEl = document.createElement("p")
    navigatorTitleEl.innerHTML = "Путь персонажа"
    navigatorTitleEl.className = "title"
    navigatorEl.appendChild(navigatorTitleEl)*/


    //Строчка первая кубика    
    let goNorthWestEL = document.createElement("div")
    goNorthWestEL.innerHTML = "NW"
    goNorthWestEL.className = "arrow"
    navigatorEl.appendChild(goNorthWestEL)
    goNorthWestEL.addEventListener("click", this.parent.goNorthWest)

    let goNorthEl = document.createElement("div")
    goNorthEl.innerHTML = "N"
    goNorthEl.className = "arrow"
    navigatorEl.appendChild(goNorthEl)
    //делаю обработчик щелчка по диву N
    goNorthEl.addEventListener("click", this.parent.goNorth)

    let goNortheEastEl = document.createElement("div")
    goNortheEastEl.innerHTML = "NE"
    goNortheEastEl.className = "arrow"
    navigatorEl.appendChild(goNortheEastEl)
    goNortheEastEl.addEventListener("click", this.parent.goNortheEast)

    // Строчка вторая кубика
    let goWestEl = document.createElement("div")
    goWestEl.innerHTML = "W"
    goWestEl.className = "arrow"
    navigatorEl.appendChild(goWestEl)
    goWestEl.addEventListener("click", this.parent.goWest)

    let goEmptyEl = document.createElement("div")
    goEmptyEl.innerHTML = ""
    goEmptyEl.className = "arrow"
    navigatorEl.appendChild(goEmptyEl)

    let goEastEl = document.createElement("div")
    goEastEl.innerHTML = "E"
    goEastEl.className = "arrow"
    navigatorEl.appendChild(goEastEl)
    goEastEl.addEventListener("click", this.parent.goEast)

    //Строчка третья кубика
    let goSouthWestEl = document.createElement("div")
    goSouthWestEl.innerHTML = "SW"
    goSouthWestEl.className = "arrow"
    navigatorEl.appendChild(goSouthWestEl)
    goSouthWestEl.addEventListener("click", this.parent.goSouthWest)

    let goSouthEl = document.createElement("div")
    goSouthEl.innerHTML = "S"
    goSouthEl.className = "arrow"
    navigatorEl.appendChild(goSouthEl)
    goSouthEl.addEventListener("click", this.parent.goSouth)

    let goSouthEastEL = document.createElement("div")
    goSouthEastEL.innerHTML = "SE"
    goSouthEastEL.className = "arrow"
    navigatorEl.appendChild(goSouthEastEL)
    goSouthEastEL.addEventListener("click", this.parent.goSouthEast)
}

nprt = null