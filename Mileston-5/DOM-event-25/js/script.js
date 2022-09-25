console.log('dom events');//25.2

function makeRed() {
    document.body.style.backgroundColor = 'Red';
}


const purpleButton = document.getElementById('make-Purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const makeButton = document.getElementById('make-blue');
makeButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}