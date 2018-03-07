window.onload = function() {

	url = "https://www.fip.fr/livemeta/66"

	fetch(`${url}?_=${Date.now()}`, {mode: 'cors'})
      .then(response => response.json())
      .then(response => Steps.getAll(response))
      .then(steps => {
		console.log('Checkout this JSON! _', out, "_ !! ");

        preferences.set('broadcasts', steps);

        return steps;
      })
      .then(steps => {
        this.dispatchBroadcasts(steps);
        this.lastfm.scrobble(steps);

        return steps;
      })
      .catch(err => { throw err });


	var toto = fetch(url, {mode: 'cors'})
				.then(res => res.text())
				.then((out) => {
				})
				.catch(err => { throw err });
}
