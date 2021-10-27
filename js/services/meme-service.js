'use strict'

const KEY_GMEME = 'gMemeData'

var gKeywords = {'happy': 12,'funny puk': 1}

var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}];

var gMeme = createMeme(5,0)

function createMeme(selectedImgId, selectedLineIdx){
    var meme = {
        selectedImgId,
        selectedLineIdx,
        lines: _createLines()
    }
    console.log('meme',meme);
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
            size: 20, align: 'left', 
            color: 'red' 
    }
    console.log('line',line);
    return line
}


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