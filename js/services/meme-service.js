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

function _createLine(posX=250,posY=50){
    var line = {
        txt: 'I never eat Falafel', 
        size: 50, 
        align: 'left', 
        color: 'red',
        posX,
        posY 
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

function getTexts(){
    return gMeme.lines
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

function changeSelectedLineIdx(){

}

function addText(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt = txt.toUpperCase()
}

function getTxt(){
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getFontSize(){
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function increaseFontSize(){
    gMeme.lines[gMeme.selectedLineIdx].size+=2
}

function decreaseFontSize(){
    gMeme.lines[gMeme.selectedLineIdx].size-=2
}

function getLinePosX(){
    return gMeme.lines[gMeme.selectedLineIdx].posX
}

function getLinePosY(){
    return gMeme.lines[gMeme.selectedLineIdx].posY
}

function changeLinePosX(x){
    gMeme.lines[gMeme.selectedLineIdx].posX = x
}

function changeLinePosY(y){
    gMeme.lines[gMeme.selectedLineIdx].posY = y
}

function addLine() {
    if (gMeme.selectedLineIdx>=1){
        gMeme.lines.push(_createLine(undefined, 250))
        gMeme.selectedLineIdx++
    }else{
        gMeme.selectedLineIdx++
        gMeme.lines.push(_createLine(undefined, 490))
    }
}

function switchLine() {
	if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
		gMeme.selectedLineIdx = 0;
		return;
	}
	gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1;
}


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