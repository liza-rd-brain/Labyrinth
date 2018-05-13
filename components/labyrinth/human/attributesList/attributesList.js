function АttributesList(onButtonElClick) {
    this.onButtonElClick = onButtonElClick
}

let alprt = АttributesList.prototype
alprt.CLASS_NAME = "attributesList"

alprt.NAME = "имя"
alprt.AGE = "возраст"
alprt.GENDER = "пол"
alprt.RACE = "расса"
alprt.SKILL = "навык"


alprt.render = function () {

    let attributesListEl = document.createElement("form")
    attributesListEl.className = this.CLASS_NAME

    let attributeNameEl = new Attribute(this.NAME).render()
    attributesListEl.appendChild(attributeNameEl)

    let attributeAgeEl = new Attribute(this.AGE).render()
    attributesListEl.appendChild(attributeAgeEl)

    let attributeGenderEl = new Attribute(this.GENDER).render()
    attributesListEl.appendChild(attributeGenderEl)

    let attributeRaceEl = new Attribute(this.RACE).render()
    attributesListEl.appendChild(attributeRaceEl)

    let attributeSkillEl = new Attribute(this.SKILL).render()
    attributesListEl.appendChild(attributeSkillEl)

    let buttonEl = new Button(this.onButtonElClick, attributesListEl).render()
    attributesListEl.appendChild(buttonEl)
    return attributesListEl
}


alprt = null






