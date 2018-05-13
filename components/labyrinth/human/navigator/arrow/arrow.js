function Arrow(direction, go, updateLabyrinth) {
    this.direction = direction
    this.go = go
    this.updateLabyrinth = updateLabyrinth
}

let arrprt = Arrow.prototype
arrprt.CLASS_NAME = "arrow"

arrprt.render = function () {
    //cтрелки можно тоже сделать через button
    let ArrowEl = document.createElement("button")
    ArrowEl.type = "button"
    ArrowEl.innerHTML = this.direction
    ArrowEl.className = this.CLASS_NAME
    ArrowEl.data = this.direction
    ArrowEl.addEventListener("click", this.go)

    return ArrowEl
}

arrprt = null