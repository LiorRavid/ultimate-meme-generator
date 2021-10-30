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
        txt: null, 
        size: 40, 
        align: 'center', 
        color: 'white',
        strokeColor: 'black',
        font:'impact',
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
    if(!gMeme.lines ||gMeme.lines.length===0 ){
        gMeme.lines = _createLines()
    }
    gMeme.lines[gMeme.selectedLineIdx].txt = txt.toUpperCase()
}

function getTxt(){
    if(!gMeme.lines ||gMeme.lines.length===0 )return
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
    if(!gMeme.lines ||gMeme.lines.length===0 ) return -1
    return gMeme.lines[gMeme.selectedLineIdx].posY
}

function changeLinePosX(x){
    gMeme.lines[gMeme.selectedLineIdx].posX = x
}

function changeLinePosY(y){
    gMeme.lines[gMeme.selectedLineIdx].posY = y
}

function addLine() {
    if(!gMeme.lines ||gMeme.lines.length===0){
        gMeme.lines.push(_createLine())
        gMeme.selectedLineIdx= 0
    } else if (gMeme.selectedLineIdx>=1){
        gMeme.lines.push(_createLine(undefined, 250))
        gMeme.selectedLineIdx++
    }else{
        gMeme.selectedLineIdx++
        gMeme.lines.push(_createLine(undefined, 490))
    }
}

function deleteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    if (gMeme.selectedLineIdx===0 && gMeme.lines.length>=1) return
    gMeme.selectedLineIdx--

}

function switchLine() {
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
		gMeme.selectedLineIdx = 0;
		return;
	}
	gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1;
}

function changeColor(color){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function getColor(){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    return gMeme.lines[gMeme.selectedLineIdx].color
}

function changeStrokeColor(color){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function getStrokeColor(){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    return gMeme.lines[gMeme.selectedLineIdx].strokeColor
}

function changeAlign(alignValue){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    gMeme.lines[gMeme.selectedLineIdx].align = alignValue
}

function getAlign(){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    return gMeme.lines[gMeme.selectedLineIdx].align
}

function changeFont(font){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function getFont(){
    if(!gMeme.lines ||gMeme.lines.length===0){
        return
    }
    return gMeme.lines[gMeme.selectedLineIdx].font
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