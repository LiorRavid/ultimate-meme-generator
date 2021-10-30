'use strict'

var gElCanvas
var gCtx
var gRectX = 10

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
    var maxWidth = 400
    gCtx.lineWidth = 2
    gCtx.strokeStyle = getStrokeColor()
    gCtx.fillStyle = getColor()
    gCtx.font = `${line.size}px ${getFont()}`
    gCtx.textAlign= getAlign()
    var txtLines = getLines(gCtx, line.txt, maxWidth)
    fillText(txtLines,line.size, x, y)
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
  addText(txt)
  drawImg()
})

function fillText(txtLines, fontZise, x , y){
  var lineIdx = 0
  const linesLength = txtLines.length
  if (linesLength===1){
    gCtx.fillText(txtLines[0], x,  y)
    gCtx.strokeText(txtLines[0], x,  y)
  }else {
    txtLines.forEach(txtLine => {
      console.log('lineIdx*txtLine.size',lineIdx*fontZise);
      gCtx.fillText(txtLine, x, y + lineIdx*fontZise)
      gCtx.strokeText(txtLine, x,  y + lineIdx*fontZise)
      lineIdx++
    })
  }
}

function onEditMeme(elImg){
  // clearCanvas()
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
  document.querySelector('.color-picker').style.display='block'
  document.querySelector('.stroke-color-picker').style.display='block'
  document.querySelector('.increase-font').style.display='block'
  document.querySelector('.decrease-font').style.display='block'
  document.querySelector('.up').style.display='block'
  document.querySelector('.down').style.display='block'
  document.querySelector('.add-line').style.display='block'
  document.querySelector('.switch-line').style.display='block'
  document.querySelector('.delete-line').style.display='block'
  document.querySelector('.al-right').style.display='block'
  document.querySelector('.al-center').style.display='block'
  document.querySelector('.al-left').style.display='block'
  document.querySelector('.font').style.display='block'
}

function onIncreaseFont(){
  // clearCanvas()
  increaseFontSize()
  drawImg()
}

function onDecreaseFont(){
  // clearCanvas()
  decreaseFontSize()
  drawImg()
}

function onUpLine(){
  // clearCanvas()
  var LinePosY = getLinePosY()
  LinePosY-=10
  if(LinePosY<50)LinePosY=50
  changeLinePosY(LinePosY)
  drawImg()
}

function onDownLine(){
  // clearCanvas()
  var LinePosY = getLinePosY()
  LinePosY+=10
  if(LinePosY>490)LinePosY=490
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
  if(!txt) document.querySelector('.input-text').value = ''
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

// function onAddText(){
  //   var elTxt = document.querySelector('.input-text')
  //   const txt = elTxt.value
  //   addText(txt, getSelectedLineIdx())
  //   clearCanvas()
  //   drawImg()
  // }

  function drawRect(x,y){
    gCtx.beginPath();
    var fontSize = getFontSize()
    gCtx.rect(x, y, 480, fontSize+2);
    gCtx.strokeStyle = 'white';
    gCtx.stroke();
  }

  // function getRectStartY(){
  //   var posY = getLinePosY() - 
    
  // }