function Button(onButtonElClick, attributesListEl) {
    this.onButtonElClick = onButtonElClick
    this.attributesListEl = attributesListEl
}

let bprt = Button.prototype
bprt.CLASS_NAME = "button"
bprt.OK = "Ok!"

bprt.render = function () {
    let buttonEl = document.createElement("button")
    buttonEl.innerHTML = this.OK
    buttonEl.type = "button"
    buttonEl.className = this.CLASS_NAME
    buttonEl.data = this.attributesListEl
    buttonEl.addEventListener("click", this.onButtonElClick)
    return buttonEl
}

bprt = null



