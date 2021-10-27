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
    console.log('meme',meme)
    return meme
}

function _createLines(){
    var lines = [_createLine()]
    console.log('lines',lines);
    return lines
}

function _createLine(){
    var line = {
        txt: 'I never eat Falafel', 
            size: 20, 
            align: 'left', 
            color: 'red' 
    }
    console.log('line',line);
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