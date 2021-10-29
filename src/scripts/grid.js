class Grid {
  constructor(options) {
    this.rows = options('rows')
    this.cols = options('cols')
  }

  create(rows, cols) {
    const frame = document.getElementById("frame")
    for (let i=0; i < (rows * cols); i++) {
      let cell = document.createElement('div')
      cell.id = (i+1);
      frame.appentChild(cell).className = 'grid-cell'
    }
  }
}