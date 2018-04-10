window.onload = function() {
	// radio-title
	var radio_title = document.getElementById("radio-title");

	// audio
	var audio = document.getElementById("audio-general");
	var audio_source = document.getElementById("audio-source");

	// Buttons
	var container1 = document.getElementById("audio1-container");
	var playButton1 = document.getElementById("audio1-controls");

	var container2 = document.getElementById("audio2-container");
	var playButton2 = document.getElementById("audio2-controls");

	var container3 = document.getElementById("audio3-container");
	var playButton3 = document.getElementById("audio3-controls");

	var container4 = document.getElementById("audio4-container");
	var playButton4 = document.getElementById("audio4-controls");

	var container5 = document.getElementById("audio5-container");
	var playButton5 = document.getElementById("audio5-controls");

	var container6 = document.getElementById("audio6-container");
	var playButton6 = document.getElementById("audio6-controls");

	var container7 = document.getElementById("audio7-container");
	var playButton7 = document.getElementById("audio7-controls");

	var container8 = document.getElementById("audio8-container");
	var playButton8 = document.getElementById("audio8-controls");

	var playingStation = "";

	function toTitleCase(str)	{
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
		playButton1.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton4.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton5.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton6.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton7.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton8.innerHTML = "<i class='fas fa-play fa-6x'></i>";
	}

	function playAudio (stationName) {
		audio_source.src = stations[stationName]["stream"];

		audio.load();
		audio.play();

		getSongInfo(stationName);

		radio_title.innerHTML = stations[stationName]["name"];


		// Update the button text to 'Pause'
		playButton1.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton2.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton3.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton4.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton5.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton6.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton7.innerHTML = "<i class='fas fa-play fa-6x'></i>";
		playButton8.innerHTML = "<i class='fas fa-play fa-6x'></i>";

		if (stationName == "fip-paris") {
			playButton1.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-electro") {
			playButton2.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-groove") {
			playButton3.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-rock") {
			playButton4.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-jazz") {
			playButton5.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-nouveau") {
			playButton6.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-reggae") {
			playButton7.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}
		else if (stationName == "theme-monde") {
			playButton8.innerHTML = "<i class='fas fa-pause fa-6x'></i>";
		}

	}

	function handleStations(station) {
		if (audio.paused == true || playingStation != station) {
			// Play the audio
			playingStation = station;
			playAudio(playingStation);

		} else {
			pauseAudio();
		}
	}

	audio_controls = function() {
		// Event listener for the play/pause button
		container1.addEventListener("click", function(){handleStations("fip-paris")});
		container2.addEventListener("click", function(){handleStations("theme-electro")});
		container3.addEventListener("click", function(){handleStations("theme-groove")});
		container4.addEventListener("click", function(){handleStations("theme-rock")});
		container5.addEventListener("click", function(){handleStations("theme-jazz")});
		container6.addEventListener("click", function(){handleStations("theme-nouveau")});
		container7.addEventListener("click", function(){handleStations("theme-reggae")});
		container8.addEventListener("click", function(){handleStations("theme-monde")});

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

	setInterval(function(){getSongInfo(playingStation)}, 2*1000); // 1000 millisecs

}
