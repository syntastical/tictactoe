var Game = {
    state: ['', '', '', '', '', '', '', '', '', ''],
    turn: 'player',
    makeMove: (position) => {
        if(Game.state[position] != '') {
            error.innerHTML = `AI attempted to perform an invalid action. makeMove(${position})`
        }
        Game.state[position] = 'O'
        document.getElementById(position).innerHTML = 'O'
        if(check()) {
            return
        }
        Game.turn = 'player'
    }
}

var boxes = document.getElementsByTagName('TD');
var error = document.getElementById('error')
var statusMessage = document.getElementById('status')

var box1 = document.getElementById('0')
var box2 = document.getElementById('1')
var box3 = document.getElementById('2')
var box4 = document.getElementById('3')
var box5 = document.getElementById('4')
var box6 = document.getElementById('5')
var box7 = document.getElementById('6')
var box8 = document.getElementById('7')
var box9 = document.getElementById('8')

for(var i = 0; i < boxes.length; i++) {
    boxes.item(i).addEventListener('click', performMove, false);
}

function performMove() {
    if(this.innerHTML != '') {
        error.innerHTML = 'Invalid selection'
    } else {
        if(Game.turn != 'player') {
            error.innerHTML = 'Not your turn yet...'
            return
        }

        error.innerHTML = ''
        
        this.innerHTML = 'X'
        Game.state[this.id] = 'X'

        if(check()) {
            return
        }
        Game.turn = 'ai'

        AI.logic(Game)
    }
}

function check() {
    if(
        (box1.innerHTML != '' && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML)
        || (box4.innerHTML != '' && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML)
        || (box7.innerHTML != '' && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML)
        || (box1.innerHTML != '' && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML)
        || (box2.innerHTML != '' && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) 
        || (box3.innerHTML != '' && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML)
        || (box7.innerHTML != '' && box7.innerHTML == box5.innerHTML && box7.innerHTML == box3.innerHTML)
        || (box9.innerHTML != '' && box9.innerHTML == box5.innerHTML && box9.innerHTML == box1.innerHTML)
    ) {
        statusMessage.innerHTML = `${Game.turn} wins`
        return true
    }
    
    if(
        box1.innerHTML != '' 
        && box2.innerHTML != ''
        && box3.innerHTML != ''
        && box4.innerHTML != ''
        && box5.innerHTML != ''
        && box6.innerHTML != ''
        && box7.innerHTML != ''
        && box8.innerHTML != ''
        && box9.innerHTML != ''
    ) {
        statusMessage.innerHTML = 'Cats game.'
        return true
    }

    return false
}