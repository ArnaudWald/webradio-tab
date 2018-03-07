window.onload = function() {

	url = "https://www.fip.fr/livemeta/66";

	var json_display = document.getElementById("json-display");

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
        console.log(data);
				json_display.innerHTML = data["stationId"];
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
