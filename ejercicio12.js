var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var cpuChoice = Math.random() * 3;

/* no supe cómo sacar la variable 'selection' y su valor fuera de la función, no podía guardar
la selección del usuario de manera global :C */

rock.onclick = function (){
    user = 'rock';
}
paper.onclick = function (){
    user = 'paper';
}
scissors.onclick = function (){
    user = 'scissors';
}

function userGame(e){
	var selection = e.target.id;
	var userelement = document.createElement('p');
	var usertext = document.createTextNode('Your choice is ' + selection);
	userelement.classList.add('user-choice');
	userelement.appendChild(usertext);
	document.body.appendChild(userelement);
}

rock.addEventListener('click', userGame);
paper.addEventListener('click', userGame);
scissors.addEventListener('click', userGame);

function cpuGame(){
	var cpuelement = document.createElement('p');
	var cputext = document.createTextNode('My choice is ' + cpu);
	cpuelement.classList.add('cpu-choice');
	document.body.appendChild(cpuelement);
	cpuelement.appendChild(cputext);
}

document.body.addEventListener('click', function() {

	if (cpuChoice > 0 && cpuChoice < 1) {
		cpu = 'rock';
		cpuGame();

	} else if (cpuChoice > 1 && cpuChoice < 2) {
		cpu = 'paper';
		cpuGame();

	} else {
		cpu = 'scissors'
		cpuGame();
	}

	if (user == cpu) {
        alert("it's a tie :|");

    } else if ((user =='scissors' && cpu == 'paper') ||
        (user == 'rock' && cpu == 'scissors') ||
        (user == 'paper' && cpu == 'rock')) {
            alert('you win! :)');

    } else {
            alert('you lose! :(');
    }
})