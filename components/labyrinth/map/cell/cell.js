function Cell(col, row, blockSize, ctx) {
    this.col = col
    this.row = row
    this.blockSize = blockSize
    this.ctx = ctx
    this.drawCircle = this.drawCircle.bind(this)
    this.x = null
    this.y = null

}


let ceprt = Cell.prototype
ceprt.CLASS_NAME = "cell"

ceprt.landscape = ["ground", "grass", "water"]


ceprt.render = function () {
    let cellEl = document.createElement("div")
    cellEl.className = this.CLASS_NAME
    cellEl.innerHTML = "кусь"
    this.drawGrid("red")
    this.drawLandscape()
}


//рисуем сетку карты
ceprt.drawGrid = function (color) {
    this.x = this.col * this.blockSize
    this.y = this.row * this.blockSize
    this.ctx.strokeStyle = color
    this.ctx.strokeRect(this.x, this.y, this.blockSize, this.blockSize)
}

// рисуем саму карту= заполнение ячейки
ceprt.drawLandscape = function () {

    let pickLandscape = this.landscape[Math.floor(Math.random() * this.landscape.length)]
    this.ctx.fillText(pickLandscape, this.x + this.blockSize / 3, this.y + this.blockSize / 3)

    let landscapeColor
    /* let landscapeColor(pickLandscape) */
    switch (pickLandscape) {
        case "ground":
            landscapeColor = "rgb(128,0,0, 0.5)"
            break;
        case "grass":
            landscapeColor = "rgb( 0, 255, 0, 0.5)"
            break;
        case "water":
            landscapeColor = "	rgb(0,0,255, 0.5)"
            break;
    }
    this.ctx.fillStyle = landscapeColor
    this.ctx.fillRect(this.x, this.y, this.blockSize, this.blockSize)
}

//зачем это здесь?!
//функция рисования кружочка
ceprt.circle = function (x, y, radius, fillCircle) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        this.ctx.fill()
    } else {
        this.ctx.stroke()
    }
}

//нарисовать кружочек
ceprt.drawCircle = function (color) {
    var centerX = this.col * this.blockSize + this.blockSize / 2
    var centerY = this.row * this.blockSize + this.blockSize / 2
    this.ctx.fillStyle = color
    this.circle(centerX, centerY, this.blockSize / 2, true)
}


ceprt = null