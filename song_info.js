window.onload = function() {

	audio_controls()

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	function showSongInfo(song) {
		var songName = document.getElementById("title");
		var album = document.getElementById("album");
		var year = document.getElementById("year");
		var label = document.getElementById("label");
		var cover = document.getElementById("cover");

		songName.innerHTML = toTitleCase(song["title"]);
		album.innerHTML = toTitleCase(song["titreAlbum"]);
		year.innerHTML = song["anneeEditionMusique"];
		label.innerHTML = toTitleCase(song["label"]);

		cover.src = song["visual"];

	}

	url = "https://www.fip.fr/livemeta/66";

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
