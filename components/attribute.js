function Аttribute(humanEl, onElButtonClick) {
    this.humanEl = humanEl
    this.onElButtonClick = onElButtonClick
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
    //вариант с передачей this
    /*this.parent.nameEl = document.createElement("input")
    this.parent.nameEl.placeholder = "Введите имя персонажа"
    this.parent.nameEl.className = "row"
    attributeFormEl.appendChild(this.parent.nameEl)*/
    let nameEl = document.createElement("input")
    nameEl.placeholder = "Введите имя персонажа"
    nameEl.className = "row"
    attributeFormEl.appendChild(nameEl)
    //Строка изменить возраст
    let ageEl = document.createElement("input")
    ageEl.placeholder = "Введите возраст персонажа"
    ageEl.className = "row"
    attributeFormEl.appendChild(ageEl)
    //Строка изменить пол
    let genderEl = document.createElement("input")
    genderEl.placeholder = "Введите пол персонажа"
    genderEl.className = "row"
    attributeFormEl.appendChild(genderEl)
    //Строка изменить рассу
    let raceEl = document.createElement("input")
    raceEl.placeholder = "Введите рассу персонажа"
    raceEl.className = "row"
    attributeFormEl.appendChild(raceEl)
    //Строка изменить навык
    let skillEl = document.createElement("input")
    skillEl.placeholder = "Введите навык персонажа"
    skillEl.className = "row"
    attributeFormEl.appendChild(skillEl)

    //Кнопка "Ок!"
    let elButton = document.createElement("button")
    elButton.innerHTML = "Ok!"
    elButton.type = "button"
    elButton.className = "row"
    elButton.data = attributeFormEl
    /*elButton.data1 = nameEl
    elButton.data2 = ageEl*/
    attributeFormEl.appendChild(elButton)
    elButton.addEventListener("click", this.onElButtonClick)

}

aprt = null



