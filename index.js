function dwarfRollCall(dwarves) {
  var string = [];
	dwarves.forEach(function(name, i) {
		string.push(i+1 +". " + name + " ");
	});
	return string.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
    planeteerCalls.forEach(function(ele) {
  	ele = ele.toUpperCase() + "!";
  	calls.push(ele);
  });
  return calls;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}
