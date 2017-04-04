var game = {
    players: [],
    addPlayer: function(name){
        new_player = playerConstructor(name);
        game.players.push(new_player);
  }
};

function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(){
        var data;
        var index = Math.floor(Math.random() * 150 ) + 1;
        $.ajax({
            async: false,
            url: "http://pokeapi.co/api/v1/pokemon/" + index + "/",
            success: function(result) {
                data = result;
            }
        });
        player.hand.push(data);
    };
    return player;
};
game.addPlayer('Ash')
game.players[0].addCard()
console.log(game.players);
console.log(game.players[0].hand[0]);
game.addPlayer('Misty')
game.players[1].addCard()
console.log(game.players[1].name)
console.log(game.players[1].hand[0]);

$(document).ready(function() {
	$("#Pokemon1").html(game.players[0].hand[0].name);
	$("#Pokemon2").html(game.players[1].hand[0].name);
	var pokemon1 = game.players[0].hand[0].hp
	var pokemon2 = game.players[1].hand[0].hp
	if (pokemon1 > pokemon2) {
		$("#winner").html(game.players[0].hand[0].name + " wins!");
	}
	else if (pokemon1 < pokemon2) {
		$("#winner").html(game.players[1].hand[0].name + " wins!");
	}
	else {
		$("#winner").html("Draw!");
	}

});
