# webradio-tab
An effective way to listen to my favorite webradio (which is Fip) from a browser tab


## To do
- [ ] Add other radios than Fip

- [ ] Volume control

- [ ] Avoid manual copy/paste for html and JS, which is a source of errors

- [ ] Improve the UI

- [ ] Fix the CORS problem, maybe by hosting the project on a server ?

- [x] Spacebar pause

- [x] Other FIP channels

- [x] Retrieve song properties (title, artist, cover image) and show it somewhere

- [x] Only one audio object, and the script changes the source URL

## Running
Simply open the `radio-fip.html` file in a browser tab, an play the radio of your choice !

You can bookmark the tab to open it easily later.

## Retrieving song info

To retrieve song info from a local HTML file, you need to install an extension allowing CORS requests. Here is what I use:

- __Chrome:__ [Allow-Control-Allow-Origin][Chrome]
- __Firefox:__ [CORS Eveywhere][Firefox]

[Chrome]: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

[Firefox]: https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/
