function Human(updateLabyrinth, x, y, name, ageEl, genderEl, raceEl, skillEl, go, outputToConsoleCharacterAndCoordinates, onButtonElClick) {
    this.updateLabyrinth = updateLabyrinth
    this.x = x
    this.y = y
    this.name = name
    this.ageEl = ageEl
    this.genderEl = genderEl
    this.raceEl = raceEl
    this.skillEl = skillEl
    this.go = go
    this.outputToConsoleCharacterAndCoordinates = outputToConsoleCharacterAndCoordinates
    this.onButtonElClick = onButtonElClick
}

let hprt = Human.prototype
hprt.CLASS_NAME = "human"


hprt.render = function () {
    let humanEl = document.createElement("div")
    humanEl.className = this.CLASS_NAME
    let attributesListEl = new АttributesList(this.onButtonElClick).render()
    humanEl.appendChild(attributesListEl)
    let navigatorEl = new Navigator(this.go).render()
    humanEl.appendChild(navigatorEl)
    return humanEl
}

hprt = null
