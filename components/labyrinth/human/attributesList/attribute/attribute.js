function Attribute(row) {
    this.row = row
}

let attprt = Attribute.prototype
attprt.CLASS_NAME = "attribute"


attprt.render = function () {
    let attributeEl = document.createElement("input")
    attributeEl.placeholder = this.row
    attributeEl.className = this.CLASS_NAME
    return attributeEl
}

attprt = null



