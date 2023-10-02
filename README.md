<div align="center" display='flex' > 
<img width='200px' src="https://raw.githubusercontent.com/coding-Ves/weather-vane/main/public/logo.png" alt="App Screenshot" title="Weather App Screenshot"/>
   
</div>

# WEATHER VANE

**What's a weather vane?**
A revolving pointer to show the direction of the wind, typically mounted on top of a building.

Find out the weather today, next week, or in the next few hours!

## FEATURES

-   Search for cities to display weather
-   7 quick-access city buttons
-   Details about Current Weather, Hourly and Weekly forecasts, and Weather Alerts
-   Fully responsive on tablet & mobile.
-   Dark & Light theme/mode
-   Redux state management
-   Uses OpenWeather API for data fetching

## VISUALS

<div align="center" display='flex' flex-direction='column' > 
<img width='70%' src="https://raw.githubusercontent.com/coding-Ves/weather-vane/theme/public/Weather-vane.gif" alt="App Screenshot" title="Weather App Screenshot"/>
   <img width='20%' src="https://raw.githubusercontent.com/coding-Ves/weather-vane/theme/public/weather-vane-dark.gif" alt="App Screenshot" title="Weather App Screenshot"/>
</div>

## MAIN TECHNOLOGIES

<div align="center">
	<code><img width="70" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
    <code><img width="70" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="70" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux"/></code>
	<code><img width="70" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="70" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="70" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI"/></code>
        
</div>

### EXTRA TECHNOLOGIES

-   Redux - For state management
-   Moment.js - For date & time handling and conversion

### REDUX STORE STRUCTURE

-- store

---> currentSelection - Stores the name of the current city and the lon & lat coordinates

---> loading - Stores loading state used for global app loader

---> theme - Stores current theme and updates it for the light/dark mode toggle

---> weather - Stores information received from the OpenWeather API about the passed city coords

### Run the project locally

Clone the project

```bash
  git clone [link]
```

Install dependencies

```bash
  npm install
```

Create a .env file in src and enter your Open Weather API KEY:

```bash
  VITE_OPENWEATHER_API_KEY = [API_KEY_HERE]
```

Start the server

```bash
  npm run dev
```

### Attributions:

City Images:

-   <a href="https://www.freepik.com/free-photo/panoramic-view-big-ben-london-sunset-uk_10590324.htm#query=London&position=1&from_view=search&track=sph">London Image by vwalakte</a> on Freepik

-   <a href="https://www.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_41481470.htm#query=Paris%20skyline&position=1&from_view=search&track=ais">Paris image by vecstock</a> on Freepik

-   <a href="https://www.freepik.com/free-photo/aerial-drone-view-berlin-germany_36701659.htm#query=berlin&position=6&from_view=search&track=sph">Berlin image by frimufilms</a> on Freepik

-   Sofia photo by <a href="https://unsplash.com/@anafrantz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ana Frantz</a> on <a href="https://unsplash.com/photos/GP13ZPV6cz8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

-   Stockholm photo by <a href="https://unsplash.com/@anabg1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ana Bórquez</a> on <a href="https://unsplash.com/photos/uF4PfwZPOR8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

-   Rome photo by <a href="https://unsplash.com/@chris_czermak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Czermak</a> on <a href="https://unsplash.com/photos/7ybKmhDTcz0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

-   Brussels photo by <a href="https://unsplash.com/@genon2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">François Genon</a> on <a href="https://unsplash.com/photos/TUthZjfR3Ps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

-   <div> Weather Vane Icon made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons"> Flat Icons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

Icons:

-   All Weather icons by <a href='https://lottiefiles.com/vdr0uy2wwsoljqtc'>jochang on lottiefiles</a>
-   <a href="https://gifer.com/en/PVYD">Loader gif</a>
