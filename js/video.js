var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay= false;
	video.loop = false;


});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click",function(){
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log("Speed is",video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 1.05;
	console.log("Speed is",video.playbackRate)

});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime)
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New location", video.currentTime);
});




document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted){
		this.innerHTML = "Mute"
		video.muted = false
		console.log("Muted")
	}

	else{
		this.innerHTML = "Unmute"
		video.muted = true
		console.log("Unmuted")
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume")
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Adding class");
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing class");
	video.classList.remove("oldSchool")
})

