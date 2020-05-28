$(function() {
	console.log("loaded");
	
	var spaces = [
		"Brits would say...",
		"Italian-American cuisine",
		"Burnt food",
		"Rehashing previous recipe",
		"My Italian grandmother made it this way",
		"Dangerous technique",
		"Self righteous opinion presented as fact",
		"Dubious sponsorship within seconds of video starting",
		"Show me the science",
		"I think...",
		"Poor technique because \"I don't care\"",
		"Here's WHY",
		"Set from a horror film",
		"Unintentional poor technique",
		"THAT is not a thing I'm going to do",
		"Poor transition into sponsor",
		"HETERO-GENEITY",
		"Subtle bicep flex",
		"Lowering your own expectations",
		"Way too much salt",
		"Says science",
		"Poor planting or presentation",
		"Way too little salt",
		"White wine"
	];
	
	var winners = [
		['a1','a2','a3','a4','a5'],
		['b1','b2','b3','b4','b5'],
		['c1','c2','c3','c4','c5'],
		['d1','d2','d3','d4','d5'],
		['e1','e2','e3','e4','e5'],
		['a1','b1','c1','d1','e1'],
		['a2','b2','c2','d2','e2'],
		['a3','b3','c3','d3','e3'],
		['a4','b4','c4','d4','e4'],
		['a5','b5','c5','d5','e5'],
		['a1','b2','c3','d4','e5'],
		['a5','b4','c3','d2','e1']
	];
	var possibleWinners = winners.length;
	
	var selected = ['c3'];
	
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	}
	
	var shuffledSpaces = shuffle(spaces);
	var spaces = document.getElementsByClassName("space");
	var splat = new Audio('assets/splat.mp3');
	var no = new Audio('assets/no.mp3');
	var i = 0;
	
	for (let space of spaces) {
		space.innerHTML = shuffledSpaces[i];
		i++;
	}
	
	$('.space').click(function() {
		$(this).toggleClass('clicked');
		splat.play();
	
		selected.push($(this).attr('id'));
	
		for (var i = 0; i < possibleWinners; i++) {
			var cellExists = 0;
	
			for (var j = 0; j < 5; j++) {
				if ($.inArray(winners[i][j], selected) > -1) {
					cellExists++;
				}
			}
	
			if (cellExists == 5) {
				no.play();
				alert('Winner!');
			}
		}
	});
});
