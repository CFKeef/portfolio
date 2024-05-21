ifneq (,$(wildcard ./.env))
    include .env
    export
endif

SPOTIFY_URL := https://accounts.spotify.com/authorize?response_type=code&client_id=$(SPOTIFY_CLIENT_ID)&scope=user-read-currently-playing+user-read-playback-state&redirect_uri=$(SPOTIFY_REDIRECT_URI)

spotify-build-url:
	@echo $${SPOTIFY_URL}

spotify-get-token:
	curl -d client_id=$(SPOTIFY_CLIENT_ID) -d client_secret=$(SPOTIFY_CLIENT_SECRET) -d grant_type=authorization_code -d code=$(SPOTIFY_CODE) -d redirect_uri=$(SPOTIFY_REDIRECT_URI) https://accounts.spotify.com/api/token