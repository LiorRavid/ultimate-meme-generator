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
    };
  }
  