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

	var playingStation = "";

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	function showSongInfo(song) {
		var songName = document.getElementById("title");
		var artiste = document.getElementById("artiste");
		var album = document.getElementById("album");
		var year = document.getElementById("year");
		var label = document.getElementById("label");
		var cover = document.getElementById("cover");

		songName.innerHTML = toTitleCase(song["title"]);
		artiste.innerHTML = toTitleCase(song["authors"]);
		album.innerHTML = toTitleCase(song["titreAlbum"]);
		year.innerHTML = song["anneeEditionMusique"];
		label.innerHTML = toTitleCase(song["label"]);

		cover.src = song["visual"];

	}

	function pauseAudio (buttonID) {
		// Pause the audio
		audio.pause();
		playingStation = "";

		radio_title.innerHTML = "en pause";

		// Update the button text to 'Play'
		buttonID.innerHTML = "<i class='fas fa-play fa-6x'></i>";
	}

	function playAudio (stationName) {
		audio_source.src = stations[stationName]["stream"];

		audio.load();
		audio.play();

		getSongInfo(stationName);

		radio_title.innerHTML = stations[stationName]["name"];
	}

	audio_controls = function() {



		// Event listener for the play/pause button
		container.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "fip-paris") {
				// Play the audio
				playingStation = "fip-paris";
				playAudio(playingStation);

				// Update the button text to 'Pause'
				playButton.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
				playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
				playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";
			} else {
				pauseAudio(playButton);
			}
		});

		container2.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "theme-electro") {
				// Play the audio
				playingStation = "theme-electro";
				playAudio(playingStation);

				// Update the button text to 'Pause'
				playButton2.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
				playButton.innerHTML = "<i class='fas fa-play fa-6x'></i>";
				playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";
			} else {
				pauseAudio(playButton2);
			}
		});

		container3.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "theme-groove") {
				// Play the audio
				playingStation = "theme-groove";
				playAudio(playingStation);

				// Update the button text to 'Pause'
				playButton3.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
				playButton.innerHTML = "<i class='fas fa-play fa-6x'></i>";
				playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
			} else {
				pauseAudio(playButton3);
			}
		});
	}


	function getSongInfo(playingStation) {
		url = "https://www.fip.fr/livemeta/" + stations[playingStation]["channelId"];

		var stationId = document.getElementById("stationId");
		var song_info;

		fetch(url, {method: 'get'})
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      // Examine the text in the response
	      response.json().then(function(data) {
					song_info = data;

					var songPosition = data["levels"][0]['position'];
					var songStep = data["levels"][0]['items'][songPosition];
					var song = data["steps"][songStep];

					showSongInfo(song);
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });

	}

	audio_controls();
}
