function Map() {
}

let mprt = Map.prototype
mprt.CLASS_NAME = "map"

//ПОКА ОТДАМ КАРТУ ЭЛЕМЕНТУ HUMAN

mprt.render = function () {
    let mapEl = document.createElement("div")
    mapEl.className = this.CLASS_NAME


    let map = []

    let n = 6
    let m = 4

    for (i = 0; i < n; i++) {
        map[i] = document.createElement("div")
        /*map[i].className = "mapCell"*/
        /*mapEl.appendChild(map[i])*/
        for (j = 0; j < m; j++) {
            map[i][j] = document.createElement("div")
            map[i][j].className = "mapCell"
            mapEl.appendChild(map[i][j])
        }
    }
    return mapEl
}

mprt = null