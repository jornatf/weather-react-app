![GitHub](https://img.shields.io/github/license/jornatf/weather-react-app) ![GitHub followers](https://img.shields.io/github/followers/jornatf) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jornatf/weather-react-app)
# Weather React App

![Screenshot](public/screenshot.png)

Get weather in realtime !

Check [demo here](https://weather-react-app-demo.vercel.app).

(This is my first React App that I developed to learn this framework)

## Before starting

This app uses a specific [weather API](https://weatherapi.com) where you need to generate an API Key. After, enter the generated key in your `.env` file like this: `REACT_APP_API_KEY="1234"`.

## How it works ?

When you open the app, you are automatically geolocated. The API provides weather information based on your location (latitude and longitude).

Weather infos refresh every minute but you can force the loading by clicking on the "Force refresh" button.
