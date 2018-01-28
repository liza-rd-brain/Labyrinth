function Navigator(humanEl,
    goNorthWest,
    goNorth,
    goNortheEast,
    goWest,
    goEast,
    goSouthWest,
    goSouth,
    goSouthEast) {
    this.humanEl = humanEl,
        this.goNorthWest = goNorthWest,
        this.goNorth = goNorth,
        this.goNortheEast = goNortheEast,
        this.goWest = goWest,
        this.goEast = goEast,
        this.goSouthWest = goSouthWest,
        this.goSouth = goSouth,
        this.goSouthEast = goSouthEast

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

nprt = null