## Spotify Jukebox API

This project was created as the back-end to enable song-queueing from any device through a web application. If you're looking for the corresponding [Client](https://github.com/rohanp9000/spotify-queue-client) or [Authorization Server](https://github.com/rohanp9000/spotify-auth-server), those can be found at their respective hyperlinks.


> What I used

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Express](https://expressjs.com/)
- [Reach Router](https://reach.tech/router)
- [Heroku](https://heroku.com)

This API serves to house spotify access tokens, so they don't have to be manually refreshed every hour, and are accessible from any device. By hosting access tokens in a database, other devices can use that same access token to modify a queue on a central player, enabling a universal song-queueing.

Additionally, there's a headless browser script that runs every hour that re-authenticates and updates the access token through the API, so there's never a down-time for the jukebox. 
