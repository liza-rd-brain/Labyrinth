function Аttribute(humanEl, parent) {
    this.humanEl = humanEl
    this.parent = parent
}

let aprt = Аttribute.prototype
aprt.CLASS_NAME = "attribute"


aprt.render = function () {
    let attributeEl = document.createElement("div")
    attributeEl.className = this.CLASS_NAME
    this.humanEl.appendChild(attributeEl)

    let attributeTitleEl = document.createElement("p")
    attributeTitleEl.className = "title"
    attributeTitleEl.innerHTML = "Данные персонажа"
    attributeEl.appendChild(attributeTitleEl)

    //Делаю форму
    let attributeFormEl = document.createElement("form")
    attributeEl.appendChild(attributeFormEl)
    attributeFormEl.className = "form"

    // Строка изменить имя
    //this.parent.nameEl = nameEl  и к остальным так же?!
    this.parent.nameEl = document.createElement("input")
    this.parent.nameEl.placeholder = "Введите имя персонажа"
    this.parent.nameEl.className = "row"
    attributeFormEl.appendChild(this.parent.nameEl)
    //Строка изменить возраст
    this.parent.ageEl = document.createElement("input")
    this.parent.ageEl.placeholder = "Введите возраст персонажа"
    this.parent.ageEl.className = "row"
    attributeFormEl.appendChild(this.parent.ageEl)
    //Строка изменить пол
    this.parent.genderEl = document.createElement("input")
    this.parent.genderEl.placeholder = "Введите пол персонажа"
    this.parent.genderEl.className = "row"
    attributeFormEl.appendChild(this.parent.genderEl)
    //Строка изменить рассу
    this.parent.raceEl = document.createElement("input")
    this.parent.raceEl.placeholder = "Введите рассу персонажа"
    this.parent.raceEl.className = "row"
    attributeFormEl.appendChild(this.parent.raceEl)
    //Строка изменить навык
    this.parent.skillEl = document.createElement("input")
    this.parent.skillEl.placeholder = "Введите навык персонажа"
    this.parent.skillEl.className = "row"
    attributeFormEl.appendChild(this.parent.skillEl)

    //Кнопка "Ок!"
    let elButton = document.createElement("button")
    elButton.innerHTML = "Ok!"
    elButton.type = "button"
    elButton.className = "row"
    attributeFormEl.appendChild(elButton)
    elButton.addEventListener("click", this.parent.onElButtonClick)

}

aprt = null



