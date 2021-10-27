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
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `50px 'impact'`
    gCtx.textAlign='center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
  }
  