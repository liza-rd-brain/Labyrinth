function Map() {
    this.mapEl = null
    this.ctx = null
    this.blockSize = null
}

let mprt = Map.prototype
mprt.CLASS_NAME = "map"

//ПОКА ОТДАМ КАРТУ ЭЛЕМЕНТУ HUMAN

mprt.render = function () {

    this.mapEl = document.createElement("div")
    this.mapEl.className = this.CLASS_NAME

    this.makeCanvas()
    this.makeMapChild()

    /* //рисуем ограждение карты
    var drawBorder = function () {
        ctx.fillStyle = "Gray"
        ctx.fillRect(0, 0, width, 1)
        ctx.fillRect(0, height - 1, width, 1)
        ctx.fillRect(0, 0, 1, height)
        ctx.fillRect(width - 1, 0, 1, height)
    }
    drawBorder() */


    return this.mapEl

}

mprt.makeCanvas = function () {
    //канва
    var canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    this.mapEl .appendChild(canvas)

    // Получаем ширину и высоту элемента canvas
    var width = canvas.width
    var height = canvas.height
    //высота и ширина в блоках
    this.blockSize = 50
    var widthInBlocks = width / this.blockSize
    var heightInBlocks = height / this.blockSize
}

//рисуем на канве кубики (кружочки)
mprt.makeMapChild = function () {
    let n = 6
    let m = 4
    let mapCell = new Array(n)
    for (i = 0; i < n; i++) {
        mapCell[i] = new Array(m)
        for (j = 0; j < m; j++) {
            mapCell[i][j] = new Cell(i, j, this.blockSize, this.ctx).render()/* drawCell("red") */
        }
    }
}
mprt = null