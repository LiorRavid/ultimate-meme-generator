'use strict'

function init() {
    renderGalleryImgs()
    createCanvas()
    addOnKeyUp()
  }

function renderGalleryImgs(){
    var strHtmls = ''
    var imgs = getImgs()
        strHtmls = imgs.map((img) => {
            return `<img class="image grid" height="200" width="200" src=${img.url} onclick="onEditMeme(this)" id="${img.id + 1}"/>`
        }).join("")
        document.querySelector(".grid").innerHTML = strHtmls
}

function backToGallery(){
    hideEdit()
    clearCanvas()
    removeMeme()
    changeInputValue()
    showGallery()
}