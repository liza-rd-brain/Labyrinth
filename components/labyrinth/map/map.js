function Map(canvas, ctx, blockSize, lengthMap, heightMap, x, y,dataMap) {
    this.canvas = canvas
    this.ctx = ctx
    this.mapEl = null
    /* this.ctx = null */
    this.blockSize = blockSize
    this.lengthMap = lengthMap
    this.heightMap = heightMap
    this.x = x
    this.y = y
    this.dataMap = dataMap
}

let mprt = Map.prototype
mprt.CLASS_NAME = "map"

mprt.render = function () {

    this.mapEl = document.createElement("div")
    this.mapEl.className = this.CLASS_NAME
   
    this.makeCanvas()
    this.makeMapChild()
    this.drawHuman()
    return this.mapEl

}


mprt.makeCanvas = function () {
    this.mapEl.appendChild(this.canvas)
}

mprt.drawHuman = function () {

    //с начальной рандомной позицией
    /* var centerX = (Math.floor(Math.random() * this.lengthMap)) * this.blockSize + this.blockSize / 2
    var centerY = (Math.floor(Math.random() * this.heightMap)) * this.blockSize + this.blockSize / 2  */


    //в начале координат
    var centerX = this.x * this.blockSize + this.blockSize / 2
    var centerY = this.y * this.blockSize + this.blockSize / 2
    this.ctx.fillStyle = "black"
    this.circle(centerX, centerY, this.blockSize / 2, true)
}

mprt.circle = function (x, y, radius, fillCircle) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        this.ctx.fill()
    } else {
        this.ctx.stroke()
    }
}



//рисуем на канве кубики (кружочки)
mprt.makeMapChild = function () {

    let mapCells = new Array(this.lengthMap)
    for (i = 0; i < this.lengthMap; i++) {
        mapCells[i] = new Array(this.heightMap)
        for (j = 0; j < this.heightMap; j++) {
            mapCells[i][j] = new Cell(i, j, this.blockSize, this.ctx, this.dataMap[i][j]).render()
        }
    }
}
mprt = null