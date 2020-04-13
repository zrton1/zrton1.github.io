//sets all classes called flex to be addressed at once
const flex = document.querySelectorAll('.flex')
const flexEnd = document.querySelectorAll('.flexEnd')

//Initialising all variables
let startingTime;
let CurrentCount = 0; //Counts number of note presses
let bankNo = 0; //Tracks bank number

let last;	//Last is set to be the last time the bank was changed (see soundBank())
let end; //End is set when the user confirms they're done
let duration; //Duration is the end time - start time

/* Only needed if I go back to using the code that changes banks every X note presses
//THIS FUNCTION CHANGES BANK EVER 5 PRESSES
let bankNo = -1;
*/

//MAIN CODE THAT IS RUNNING:
last = instruction();
startingTime = last;
console.log("start time:", last);

//Event listeners checking to see if note has been clicked or finish button has been pressed
flex.forEach(flex => {
	flex.addEventListener('click', ()=>playNote(flex))
});
flexEnd.forEach(flexEnd => {
	flexEnd.addEventListener('click',()=>finishedPlay(flexEnd))
});


//Initial instruction popup when page loads
function instruction(){
alert("Thanks for participating!\n Here are a few important things before you start:\
\n 1. Once you are done, please click Finished! This will ensure that your interaction is recorded. You may do this at any time.\
\n 2. During the interaction, the volume may change. Please click 'Test Volume' and set it to your preferred volume level and then do not change it.\
\n3. There will be a questionnaire after you finish, please feel free to complete this.\n Please note, this web app is part of a research project for ECE4095");
//Alert halts code. Once the alert has been accepted, the start time will be called.
start = startTime();
return start;
}

//!!!THIS CODE AUTOMATICALLY CHANGES BANK EVER 10 SECONDS
//Reads the note and plays sound
function playNote(flex){
	soundBank();
	console.log("bank no:", bankNo%3);
	const noteAudio = document.getElementById(flex.dataset.note)
//setting current time to 0 means that the note can be re-played every time it's clicked
	CurrentCount += 1;
	noteAudio.currentTime = 0
	noteAudio.play()
	flex.classList.add('active')
	noteAudio.addEventListener('ended' , ()=> {
		flex.classList.remove('active')
	})
console.log("CurrentCount:", CurrentCount);
}

//Auto changes soundbank every 10 secs
function soundBank(){
	//Checks the differnce between the previous bank starting time and current. If > 10secs, changes to next bank
	let now = new Date();
	if (now-last > 10000){
		bankNo+=1;
		last = now;
}
		if ((bankNo%3) == 0){
			document.getElementById("note1").dataset.note = "C"
			document.getElementById("note2").dataset.note = "Db"
			document.getElementById("note3").dataset.note = "D"
			document.getElementById("note4").dataset.note = "Eb"
			document.getElementById("note5").dataset.note = "E"
			document.getElementById("note6").dataset.note = "F"
		}
		else if ((bankNo%3) == 1) {
			document.getElementById("note1").dataset.note = "bubbles"
			document.getElementById("note2").dataset.note = "clay"
			document.getElementById("note3").dataset.note = "confetti"
			document.getElementById("note4").dataset.note = "glimmer"
			document.getElementById("note5").dataset.note = "moon"
			document.getElementById("note6").dataset.note = "ufo"
		}
		else if ((bankNo%3) == 2){
			document.getElementById("note1").dataset.note = "ding"
			document.getElementById("note2").dataset.note = "ping"
			document.getElementById("note3").dataset.note = "ring"
			document.getElementById("note4").dataset.note = "ting"
			document.getElementById("note5").dataset.note = "whistle"
			document.getElementById("note6").dataset.note = "gong"
		}

	}


/*
//THIS CODE CHANGES BANK EVER 5 PRESSES
//Reads the note and plays sound
function playNote(flex){
	soundBank(CurrentCount);
	const noteAudio = document.getElementById(flex.dataset.note)
//setting current time to 0 means that the note can be re-played every time it's clicked
	CurrentCount += 1;
	noteAudio.currentTime = 0
	noteAudio.play()
	flex.classList.add('active')
	noteAudio.addEventListener('ended' , ()=> {
		flex.classList.remove('active')
	})
console.log("CurrentCount:", CurrentCount-1);
}

//When RL is implemented, bankNo will be an output of that algorithm
//Changes sound bank every 5 presses
function soundBank(CurrentCount){
	if ((CurrentCount-1)%5 == 0){
			bankNo += 1;
			console.log("bankNo: ", bankNo%3);
		}
		if ((bankNo%3) == 0){
			document.getElementById("note1").dataset.note = "C"
			document.getElementById("note2").dataset.note = "Db"
			document.getElementById("note3").dataset.note = "D"
			document.getElementById("note4").dataset.note = "Eb"
			document.getElementById("note5").dataset.note = "E"
			document.getElementById("note6").dataset.note = "F"
		}
		else if ((bankNo%3) == 1) {
			document.getElementById("note1").dataset.note = "bubbles"
			document.getElementById("note2").dataset.note = "clay"
			document.getElementById("note3").dataset.note = "confetti"
			document.getElementById("note4").dataset.note = "glimmer"
			document.getElementById("note5").dataset.note = "moon"
			document.getElementById("note6").dataset.note = "ufo"
		}
		else if ((bankNo%3) == 2){
			document.getElementById("note1").dataset.note = "ding"
			document.getElementById("note2").dataset.note = "ping"
			document.getElementById("note3").dataset.note = "ring"
			document.getElementById("note4").dataset.note = "ting"
			document.getElementById("note5").dataset.note = "whistle"
			document.getElementById("note6").dataset.note = "gong"
		}
	}
*/

//Go to feedback form when the finished button is pressed
function finishedPlay(flexEnd){
if(confirm("Are you sure you're done?")) {
	end = endTime();
	duration = (end-startingTime)/1000;
 	console.log(endTime());
	console.log("total played time:", duration);
	setTimeout(()=>{console.log("bye!");},3000);

	//Links to URL
	//document.location = 'https://www.google.com/';
	}
}

//Finding the time when the user begins playing
function startTime(){
	let start = new Date();
	return start;
}

//Finding the time when the user confirms they're finished
function endTime(){
	let endTime = new Date();
 return endTime;
}
