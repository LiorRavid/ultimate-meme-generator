'use strict'

const KEY_GMEME = 'gMemeData'

var gKeywords = {'happy': 12,'funny puk': 1}

var gIdx = 0

var gImgs = _createImgs()

var gMeme = createMeme(7,0)

function createMeme(selectedImgId, selectedLineIdx){
    var meme = {
        selectedImgId,
        selectedLineIdx,
        lines: _createLines()
    }
    return meme
}

function _createLines(){
    var lines = [_createLine()]
    return lines
}

function _createLine(){
    var line = {
        txt: 'I never eat Falafel', 
            size: 20, 
            align: 'left', 
            color: 'red',
            posX:250,
            posY:50 
    }
    return line
}

function _createImgs(){
    var imgs = []
    for(var i=0;i<18;i++){
        imgs.push(_createImg())
        gIdx++
    }
    console.log('imgs',imgs)
    return imgs
}  

function _createImg(){
    var img = {
        id: gIdx,
        url:`img/${gIdx+1}.jpg`, 
        keywords: []
    }
    console.log('img',img)
    return img
}

function getImgUrl(selectedImgId){
    return gImgs[selectedImgId].url
}

function getSelectedImgId(){
    return gMeme.selectedImgId
}

function changeSelectedImg(imgId){
    gMeme.selectedImgId= imgId - 1
}

function getTxt(selectedLineIdx){
    console.log('gMeme.lines[selectedLineIdx].txt',gMeme.lines[selectedLineIdx].txt)
    return gMeme.lines[selectedLineIdx].txt.toUpperCase()
}

function getSelectedLineIdx(){
    return gMeme.selectedLineIdx
}

function addText(txt,selectedLineIdx){
    console.log('txt',txt)
    gMeme.lines[selectedLineIdx].txt = txt
    console.log('gMeme',gMeme.lines[selectedLineIdx].txt)
}

function getLinePosX(lineNum){
    return gMeme.lines[lineNum].posX
}

function getLinePosY(lineNum){
    return gMeme.lines[lineNum].posY
}

function changeLinePosX(lineNum, x){
    gMeme.lines[lineNum].posX = x
}

function changeLinePosY(lineNum, y){
    gMeme.lines[lineNum].posY = y
}

function addLine(){

}

function switchLine(){}



// TODO
// function addImg
// function getImgs
// createKeyWord
// createKeyWords
// getKeyWord
// getImgURL dynamic
// לעשות השמה של מילות מפתח




// var gMeme = { 
    //     selectedImgId: 5, 
    //     selectedLineIdx: 0, 
    //     lines: [ 
    //         { 
    //             txt: 'I never eat Falafel', 
    //             size: 20, align: 'left', 
    //             color: 'red' 
    //         }
    //     ]
    // }

    // var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}]