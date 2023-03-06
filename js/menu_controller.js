function start_game(){
	name = prompt("User name");
	loadpage("../game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../../index.html");
}

function options(){
	// TODO: Open options menu
	console.log("Options menu button");
}


