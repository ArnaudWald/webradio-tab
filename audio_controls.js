window.onload = function() {

	// radio-title
	var radio_title = document.getElementById("radio-title");

	// audio
	var audio = document.getElementById("audio-general");
	var audio_source = document.getElementById("audio-source");

	// Buttons
	var container = document.getElementById("audio-container");
	var playButton = document.getElementById("audio-controls");

	var container2 = document.getElementById("audio2-container");
	var playButton2 = document.getElementById("audio2-controls");

	var container3 = document.getElementById("audio3-container");
	var playButton3 = document.getElementById("audio3-controls");

	var playingstatus = 0;

	var map_radios_src = new Map();

	map_radios_src.set("fip_old", "http://chai5she.cdn.dvmr.fr/fip-midfi.mp3?hash=1517240890813");
	map_radios_src.set("fip", "http://direct.fipradio.fr/live/fip-midfi.mp3");
	map_radios_src.set("fip_electro", "http://direct.fipradio.fr/live/fip-webradio8.mp3");
	map_radios_src.set("fip_groove", "http://direct.fipradio.fr/live/fip-webradio3.mp3");

	function pauseAudio (buttonID) {
		// Pause the audio
		audio.pause();
		playingstatus = 0;

		radio_title.innerHTML = "en pause";

		// Update the button text to 'Play'
		buttonID.innerHTML = "<i class='fas fa-play fa-7x'></i>";
	}

	// Event listener for the play/pause button
	container.addEventListener("click", function() {
		if (audio.paused == true || playingstatus != 1) {
			// Play the audio
			audio_source.src = map_radios_src.get("fip");
			audio.load();
			audio.play();

			playingstatus = 1;

			radio_title.innerHTML = "Fip";

			// Update the button text to 'Pause'
			playButton.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton3.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			pauseAudio(playButton);
		}
	});

	container2.addEventListener("click", function() {
		if (audio.paused == true || playingstatus != 2) {
			// Play the audio

			audio_source.src = map_radios_src.get("fip_electro");

			audio.load();
			audio.play();

			playingstatus = 2;

			radio_title.innerHTML = "Fip Electro";

			// Update the button text to 'Pause'
			playButton2.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton3.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			pauseAudio(playButton2);
		}
	});

	container3.addEventListener("click", function() {
		if (audio.paused == true || playingstatus != 3) {
			// Play the audio
			audio_source.src = map_radios_src.get("fip_groove");

			audio.load();
			audio.play();

			playingstatus = 3;
			radio_title.innerHTML = "Fip Groove";

			// Update the button text to 'Pause'
			playButton3.innerHTML = "<i class='fas fa-pause fa-7x'></i>";
			playButton.innerHTML = "<i class='fas fa-play fa-7x'></i>";
			playButton2.innerHTML = "<i class='fas fa-play fa-7x'></i>";
		} else {
			pauseAudio(playButton3);
		}
	});
}
