window.onload = function() {

	// audio
	var audio = document.getElementById("audio");
	var audio2 = document.getElementById("audio2");

	// Buttons
	var container = document.getElementById("audio-container");
	var playButton = document.getElementById("audio-controls");
	
	var container2 = document.getElementById("audio2-container");
	var playButton2 = document.getElementById("audio2-controls");

	// Event listener for the play/pause button
	container.addEventListener("click", function() {
		if (audio.paused == true) {
			// Play the audio
			audio.play();
			audio2.pause();

			// Update the button text to 'Pause'
			playButton.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			// Pause the audio
			audio.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		}
	});

	container2.addEventListener("click", function() {
		if (audio2.paused == true) {
			// Play the audio
			audio2.play();
			audio.pause();

			// Update the button text to 'Pause'
			playButton2.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			// Pause the audio
			audio2.pause();
			audio.pause();

			// Update the button text to 'Play'
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		}
	});

}