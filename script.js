//This script links the 'flex''child class and links it to the audio
const flex = document.querySelectorAll('.flex')
let CurrentCount = 1;
let bankNo = -1;

flex.forEach(flex => {
	flex.addEventListener('click', ()=>playNote(flex))
})


//When RL is implemented, bankNo will be an output of that algorithm
//Check which sound bank to play
function soundBank(CurrentCount){
	if ((CurrentCount-1)%5 == 0){
		console.log("first CurrentCount", CurrentCount)
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
console.log("CurrentCount:", CurrentCount);
}

//Counter
function counter(count){
	count += 1;
	return count;
}
