//This script links the 'flex''child class and links it to the audio
const flex = document.querySelectorAll('.flex')
const flexEnd = document.querySelectorAll('.flexEnd')

let startingTime;
let date = new Date();

let CurrentCount = 1;
let bankNo = -1;


instruction();
//startingTime = startTime();
//console.log(startingTime);
console.log(startTime());

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
\n3. There will be a questionnaire after you finish, please feel free to complete this.\n Thank you for participating!");
}

//When RL is implemented, bankNo will be an output of that algorithm
//Check which sound bank to play
function soundBank(CurrentCount){
	if ((CurrentCount-1)%5 == 0){

		bankNo += 1;
		console.log("bankNo: ", bankNo);
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

//Reads the note and plays sound
function playNote(flex){
	soundBank(CurrentCount);
	const noteAudio = document.getElementById(flex.dataset.note)
//setting current time to 0 means that the note can be re-played every time it's clicked
	CurrentCount =  counter(CurrentCount);
	noteAudio.currentTime = 0
	noteAudio.play()
	flex.classList.add('active')
	noteAudio.addEventListener('ended' , ()=> {
		flex.classList.remove('active')
	})
console.log("CurrentCount:", CurrentCount-1);
}

//Counter
function counter(count){
	count += 1;
	return count;
}

//Go to feedback form when the finished button is pressed
function finishedPlay(flexEnd){
if(confirm("Are you sure you're done?")) {
	endTime();
 console.log(endTime());
	setTimeout(3000);
	document.location = 'https://www.google.com/';


}
}

//Timer that automatically starts when user clicks instructions alert
function startTime(){
	start = date.getTime()
	return start;
}

//Finding the end time and time spent on the page
function endTime(){
	let date2 = new Date();
 finish = date2.getTime();
 return finish;
}
