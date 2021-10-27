'use strict'

const KEY_GMEME = 'gMemeData'

var gKeywords = {'happy': 12,'funny puk': 1}

var gId = 0

var gImgs = _createImgs()

var gMeme = createMeme(5,0)

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
        gId++
    }
    console.log('imgs',imgs)
    return imgs
}  

function _createImg(){
    var img = {
        id: gId,
        url:`img/${gId+1}.jpg`, 
        keywords: ['happy']
    }
    console.log('img',img)
    return img
}



// TODO
// function addImg
// function getImgs




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