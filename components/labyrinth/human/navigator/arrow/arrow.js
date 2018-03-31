function Arrow(direction, go) {
    this.direction = direction
    this.go = go
}

let arrprt = Arrow.prototype
arrprt.CLASS_NAME = "arrow"

arrprt.render = function () {

    //cтрелки можно тоже сделать через button
   
    let ArrowEl = document.createElement("button")
    ArrowEl.type = "button"
    /* let ArrowEl = document.createElement("div") */
    ArrowEl.innerHTML = this.direction
    ArrowEl.className = this.CLASS_NAME
    ArrowEl.data = this.direction
    ArrowEl.addEventListener("click", this.go)
    /*     goNorthWestEL.addEventListener("click", this.goNorthWest)
     */
    return ArrowEl
}

arrprt = null