window.onload = function() {

	// radio-title
	var radio_title = document.getElementById("radio-title");

	// audio
	var audio = document.getElementById("audio");
	var audio2 = document.getElementById("audio2");
	var audio3 = document.getElementById("audio3");

	// Buttons
	var container = document.getElementById("audio-container");
	var playButton = document.getElementById("audio-controls");
	
	var container2 = document.getElementById("audio2-container");
	var playButton2 = document.getElementById("audio2-controls");
	
	var container3 = document.getElementById("audio3-container");
	var playButton3 = document.getElementById("audio3-controls");

	// Event listener for the play/pause button
	container.addEventListener("click", function() {
		if (audio.paused == true) {
			// Play the audio
			audio.play();
			audio2.pause();
			audio3.pause();
			
			radio_title.innerHTML = "Fip";

			// Update the button text to 'Pause'
			playButton.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton3.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			// Pause the audio
			audio.pause();
			audio2.pause();
			audio3.pause();
			
			radio_title.innerHTML = "";

			// Update the button text to 'Play'
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		}
	});

	container2.addEventListener("click", function() {
		if (audio2.paused == true) {
			// Play the audio
			audio2.play();
			audio.pause();
			audio3.pause();
			
			radio_title.innerHTML = "Fip Electro";

			// Update the button text to 'Pause'
			playButton2.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton3.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			// Pause the audio
			audio2.pause();
			audio.pause();
			audio3.pause();
			
			radio_title.innerHTML = "";

			// Update the button text to 'Play'
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		}
	});
	
	container3.addEventListener("click", function() {
		if (audio3.paused == true) {
			// Play the audio
			audio3.play();
			audio.pause();
			audio2.pause();
			
			radio_title.innerHTML = "Fip Groove";

			// Update the button text to 'Pause'
			playButton3.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			// Pause the audio
			audio3.pause();
			audio.pause();
			audio2.pause();

			radio_title.innerHTML = "";
			
			// Update the button text to 'Play'
			playButton3.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		}
	});

}