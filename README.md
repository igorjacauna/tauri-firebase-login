# Tauri + Firebase Login

This template should help get you started developing Tauri with Firebase. It uses [Tauri OAuth Plugin](https://github.com/FabianLars/tauri-plugin-oauth)

## Requirements

- Add `http://localhost` as authorized redirect URI for Firebase Client ID on GCP: https://console.cloud.google.com/apis/credentials

## Setup

- Fill the Firebase config in `src/services/firebase/app.ts`
- Replace the `CLIEN_ID_FROM_FIREBASE` in `src/services/firebase/auth.ts`

## How it works

1. Pressing `Login` button it will start a localhost server on random port using [Tauri OAuth Plugin](https://github.com/FabianLars/tauri-plugin-oauth)
2. Then, we open a browser pointing to Google OAuth 2.0 URL (https://accounts.google.com/o/oauth2/auth) with `redirect_uri` param as `localhost` with random port created previously
3. Once authorized Google will redirect to localhost server indicated by `redirect_uri`
4. Then Tauri OAuth Plugin](https://github.com/FabianLars/tauri-plugin-oauth) server will receive the request and fire a event (`oauth://url`) that we are listen
5. The payload event is the `redirect_uri` with the `access_token`
6. We use the `access_token` with `signInWithCredential` from Firebase

