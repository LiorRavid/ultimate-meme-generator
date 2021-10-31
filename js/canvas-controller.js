'use strict'

var gElCanvas
var gCtx
var gRectX = 10



function createCanvas(){
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function getCanvasSize(){
  return {
    posX: gElCanvas.width,
    posY: gElCanvas.height
  }
}

function drawImg() {
    var img = new Image()
    img.src= getImgUrl(getSelectedImgId())
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
      var lines = getTexts()
      var posY= getLinePosY()
      if(posY!==-1){
        drawRect(gRectX ,posY-getFontSize()+5)
        lines.forEach((line)=>{
          drawText(line, line.posX, line.posY)
        })
      }else return
    }
}

function drawText(line, x, y) {
    if(!line.txt)return
    var maxWidth = getPosX() - 100
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign= line.align
    var txtLines = getLines(gCtx, line.txt, maxWidth)
    fillText(txtLines,line.size, x, y)
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
            currentLine = word
        }
    }
    lines.push(currentLine)
    return lines
}

function addOnKeyUp(){
  document.querySelector('.input-text').addEventListener('keyup',function(){
    var txt = document.querySelector('.input-text').value
    addText(txt)
    drawImg()
  })
}

function fillText(txtLines, fontZise, x , y){
  var lineIdx = 0
  const linesLength = txtLines.length
  if (linesLength===1){
    gCtx.fillText(txtLines[0], x,  y)
    gCtx.strokeText(txtLines[0], x,  y)
  }else {
    txtLines.forEach(txtLine => {
      gCtx.fillText(txtLine, x, y + lineIdx*fontZise)
      gCtx.strokeText(txtLine, x,  y + lineIdx*fontZise)
      lineIdx++
    })
  }
}

function onEditMeme(elImg){
  var imgId = elImg.id
  changeSelectedImg(imgId)
  hideGallery()
  showEdit()
  drawImg()
}

function showGallery(){
  document.querySelector('.gallery').style.display='block'
}

function hideGallery(){
  document.querySelector('.gallery').style.display='none'
}

function showEdit(){
  document.querySelector('.main-Editor').style.display = 'block'
}

function  hideEdit(){
  document.querySelector('.main-Editor').style.display = 'none'
}

function onIncreaseFont(){
  increaseFontSize()
  drawImg()
}

function onDecreaseFont(){
  decreaseFontSize()
  drawImg()
}

function onUpLine(){
  var LinePosY = getLinePosY()
  LinePosY-=10
  if(LinePosY<50)LinePosY=50
  changeLinePosY(LinePosY)
  drawImg()
}

function onDownLine(){
  var canvasSize = getCanvasSize()
  var LinePosY = getLinePosY()
  LinePosY+=10
  if(LinePosY>canvasSize.posY-20)LinePosY=canvasSize.posY-20
  changeLinePosY(LinePosY)
  drawImg()
}

function onaddLine(){
  addLine()
  changeInputValue()
  drawImg()
}

function onSwitchLine(){
  switchLine()
  changeInputValue()
  drawImg()
}

function onDeleteLine(){
  deleteLine()
  drawImg()
}

function changeInputValue(){
  var txt = getTxt()
  if(!txt) document.querySelector('.input-text').value = 'Edit your text'
  else document.querySelector('.input-text').value = txt
}

function onChangeColor(color){
  changeColor(color)
  drawImg()
}

function onChangeStrokeColor(color){
  changeStrokeColor(color)
  drawImg()
}

function onAlign(alignValue){
  changeAlign(alignValue)
  drawImg()
}

function onSelectFont(font){
  changeFont(font)
  drawImg()
}

function drawRect(x,y){
  gCtx.beginPath()
  var fontSize = getFontSize()
  var posXend = getPosX()-20
  var posYend = fontSize+2
  gCtx.rect(x, y, posXend, posYend)
  gCtx.strokeStyle = 'white'
  gCtx.stroke()
}






  