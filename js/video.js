var video;
var isMuted = false;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume = document.querySelector("#volume");
	volume.innerHTML += "100%";
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var newTime = video.currentTime + 10;
	if (newTime > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = newTime;
	}
	console.log("Video current time is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	muteButton = document.querySelector("#mute");
	if (!isMuted){
		video.muted = true;
		console.log("Mute");
		muteButton.textContent = "Unmute";
		isMuted = true;
	}
	else{
		video.muted = false;
		console.log("Unmute");
		muteButton.textContent = "Mute";
		isMuted = false;
	}
});

document.querySelector("#slider").addEventListener("input", function(){
	var volumeSlider = document.querySelector("#slider");
	video.volume = volumeSlider.value / 100;
	volume.textContent = volumeSlider.value + "%";
	console.log("Volume set to", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";
});











