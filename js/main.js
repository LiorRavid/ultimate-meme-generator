'use strict'

var gElCanvas
var gCtx

function init() {
  gElCanvas = document.querySelector('canvas')
  console.log('gElCanvas',gElCanvas);
  gCtx = gElCanvas.getContext('2d')
  drawImg()
  // resizeCanvas()
}

function drawImg() {
    var img = new Image();
    img.src= getImgUrl(getSelectedImgId())
    // add an imageId instead of 5
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
      drawText(getTxt(getSelectedLineIdx()), 250, 50)
    }
}

function drawText(text, x, y) {
    var maxWidth = 400
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '50px \'impact\''
    gCtx.textAlign='center'
    var txtLines = getLines(gCtx, text, maxWidth)
    fillText(txtLines, x, y)
    // gCtx.strokeText(text, x, y)
  }

  function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
  }

  

  function getLines(ctx, text, maxWidth) {
    var words = text.split(" ")
    var lines = []
    var currentLine = words[0]

    for (var i = 1; i < words.length; i++) {
        var word = words[i]
        var width = ctx.measureText(currentLine + " " + word).width
        if (width < maxWidth) {
            currentLine += " " + word
        } else {
            lines.push(currentLine)
            currentLine = word;
        }
    }
    lines.push(currentLine)
    return lines
}

document.querySelector('.input-text').addEventListener('keyup',function(){
  var txt = document.querySelector('.input-text').value;
  addText(txt, getSelectedLineIdx())
  drawImg()
})

function fillText(txtLines, x , y){
  var lineIdx = 1
  const linesLength = txtLines.length
  if (linesLength===1){
    gCtx.fillText(txtLines[0], x,  y)
    gCtx.strokeText(txtLines[0], x,  y)
  }else {
    txtLines.forEach(txtLine => {
      gCtx.fillText(txtLine, x, y*lineIdx)
      gCtx.strokeText(txtLine, x,  y*lineIdx)
      lineIdx++
    })
  }
}

// function onAddText(){
  //   var elTxt = document.querySelector('.input-text')
  //   const txt = elTxt.value
  //   addText(txt, getSelectedLineIdx())
  //   clearCanvas()
  //   drawImg()
  // }
