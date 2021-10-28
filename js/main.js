'use strict'

var gElCanvas
var gCtx
var gFontSize = 50
var gLineNum = 0 

function init() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  // drawImg()
  // resizeCanvas()
}

function drawImg() {
    var img = new Image();
    img.src= getImgUrl(getSelectedImgId())
    // add an imageId instead of 5
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
      drawText(getTxt(getSelectedLineIdx()), getLinePosX(gLineNum), getLinePosY(gLineNum))
    }
}

function drawText(text, x, y) {
    var maxWidth = 400
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gFontSize}px 'impact'`
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
  var lineIdx = 0
  const linesLength = txtLines.length
  if (linesLength===1){
    gCtx.fillText(txtLines[0], x,  y)
    gCtx.strokeText(txtLines[0], x,  y)
  }else {
    txtLines.forEach(txtLine => {
      gCtx.fillText(txtLine, x, y + lineIdx*gFontSize)
      gCtx.strokeText(txtLine, x,  y + lineIdx*gFontSize)
      lineIdx++
    })
  }
}

function onEditMeme(elImg){
  clearCanvas()
  var imgId = elImg.id
  changeSelectedImg(imgId)
  hideGallery()
  showEdit()
  drawImg()
}

function hideGallery(){
  document.querySelector('.gallery').style.display='none'
}

function showEdit(){
  document.querySelector('canvas').style.display='block'
  document.querySelector('input').style.display='block'
  document.querySelector('.increase-font').style.display='block'
  document.querySelector('.decrease-font').style.display='block'
  document.querySelector('.up').style.display='block'
  document.querySelector('.down').style.display='block'
  document.querySelector('.add-line').style.display='block'
  document.querySelector('.switch-line').style.display='block'
}

function onIncreaseFont(){
  clearCanvas()
  gFontSize+=2
  drawImg()
}

function onDecreaseFont(){
  clearCanvas()
  gFontSize-=2
  drawImg()
}

function onUpLine(){
  clearCanvas()
  var LinePosY = getLinePosY(gLineNum)
  LinePosY-=10
  if(LinePosY<50)LinePosY=50
  changeLinePosY(gLineNum, LinePosY)
  drawImg()
}

function onDownLine(){
  clearCanvas()
  var LinePosY = getLinePosY(gLineNum)
  LinePosY+=10
  if(LinePosY>490)LinePosY=490
  changeLinePosY(gLineNum, LinePosY)
  drawImg()
}

function onaddLine(){
  addLine()
}

function onSwitchLine(){
  witchLine()
}

// function onAddText(){
  //   var elTxt = document.querySelector('.input-text')
  //   const txt = elTxt.value
  //   addText(txt, getSelectedLineIdx())
  //   clearCanvas()
  //   drawImg()
  // }
