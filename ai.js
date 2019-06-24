var AI = {
    name: 'AI',
    logic: (game) => {
        if(game.state[6] == '') {
            game.makeMove(6)
        } else if(game.state[7] == '') {
            game.makeMove(7)
        } else if(game.state[8] == '') {
            game.makeMove(8)
        }
    }
}