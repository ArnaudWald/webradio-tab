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
		var cover = document.getElementById("cover");

		songName.innerHTML = toTitleCase(song["title"]);
		artiste.innerHTML = toTitleCase(song["authors"]);
		album.innerHTML = toTitleCase(song["titreAlbum"]);
		year.innerHTML = " (" + song["anneeEditionMusique"] + ")";

		cover.style.backgroundImage = "url(" + song["visual"] + ")";

	}

	function pauseAudio () {
		// Pause the audio
		audio.pause();

		radio_title.innerHTML = "en pause";

		// Update the button text to 'Play'
		playButton.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";
	}

	function playAudio (stationName) {
		audio_source.src = stations[stationName]["stream"];

		audio.load();
		audio.play();

		getSongInfo(stationName);

		radio_title.innerHTML = stations[stationName]["name"];


		// Update the button text to 'Pause'
		playButton.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";

		if (stationName == "fip-paris"){
			playButton.innerHTML = "<i class='fas fa-pause fa-6x'></i>";

		} else if (stationName == "theme-electro") {
			playButton2.innerHTML = "<i class='fas fa-pause fa-6x'></i>";

		} else if (stationName == "theme-groove") {
			playButton3.innerHTML = "<i class='fas fa-pause fa-6x'></i>";

		}

	}

	audio_controls = function() {



		// Event listener for the play/pause button
		container.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "fip-paris") {
				// Play the audio
				playingStation = "fip-paris";
				playAudio(playingStation);


			} else {
				pauseAudio();
			}
		});

		container2.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "theme-electro") {
				// Play the audio
				playingStation = "theme-electro";
				playAudio(playingStation);

			} else {
				pauseAudio();
			}
		});

		container3.addEventListener("click", function() {
			if (audio.paused == true || playingStation != "theme-groove") {
				// Play the audio
				playingStation = "theme-groove";
				playAudio(playingStation);

			} else {
				pauseAudio();
			}
		});

		document.body.onkeyup = function(e){
    	if(e.keyCode == 32){
        if (audio.paused == false) {
					pauseAudio();
				} else {
					playAudio(playingStation);
				}
    	}
		}
	}


	function getSongInfo(playingStation) {
		url = "https://www.fip.fr/livemeta/" + stations[playingStation]["channelId"];

		var stationId = document.getElementById("stationId");
		var song_info;

		var header = new Headers({
    'Access-Control-Allow-Origin':'*'
		});

		fetch(url, {method: 'get', mode:'cors', header:header})
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
