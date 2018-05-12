function Navigator(go, updateLabyrinth) {
    this.go = go
    this.updateLabyrinth = updateLabyrinth
}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"

nprt.NORTHWEST = "NW"
nprt.NORTH = "N"
nprt.NORTHEAST = "NE"
nprt.WEST = "W"
nprt.EAST = "E"
nprt.SOUTHWEST = "SW"
nprt.SOUTH = "S"
nprt.SOUTHEAST = "SE"
nprt.EMPTY = ""


nprt.render = function () {
    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME

    let goNorthWestEL = new Arrow(this.NORTHWEST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goNorthWestEL)
    let goNorthEl = new Arrow(this.NORTH, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goNorthEl)
    let goNortheEastEl = new Arrow(this.NORTHEAST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goNortheEastEl)
    let goWestEl = new Arrow(this.WEST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goWestEl)
    let goEmptyEl = new Arrow(this.EMPTY, this.go, this.updateLabyrinth).render()
    goEmptyEl.className = "emptyEl"
    navigatorEl.appendChild(goEmptyEl)
    let goEastEl = new Arrow(this.EAST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goEastEl)
    let goSouthWestEl = new Arrow(this.SOUTHWEST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goSouthWestEl)
    let goSouthEl = new Arrow(this.SOUTH, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goSouthEl)
    let goSouthEastEL = new Arrow(this.SOUTHEAST, this.go, this.updateLabyrinth).render()
    navigatorEl.appendChild(goSouthEastEL)
    //навешивала обработчик на кнопку
    /* goSouthEastEL.addEventListener("click", this.goSouthEast) */

    return navigatorEl
}

nprt = null