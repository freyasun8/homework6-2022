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
	console.log("Skip ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
	    video.currentTime = 0
	console.log("video current time",video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute")
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}else {
		console.log("Unmute")
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
})
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume")
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	video.classList.remove("oldSchool")
})

