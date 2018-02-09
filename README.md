# Visualizing Temperature

## Objectives
* Build a page that uses data from the [Weather Underground](http://www.wunderground.com/weather/api/) to render a line chart using [Chart.js](http://chartkick.com/). It should look something like the picture below.

![example pic](http://ironboard-curriculum-content.s3.amazonaws.com/web-development/js-weather-api-ajax/example.png "Pic of Example")

* Learn how to use `fetch` to keep data current.
* Use a JavaScript visualization library.

## Instructions
* Sign up for an account to generate a Weather Underground API key [here](http://www.wunderground.com/weather/api/d/login.html). You'll use this key for API calls.
* You'll be using [Chart.js](http://www.chartjs.org/) to visualize the JSON from Weather Underground so check it out. Require the `Chart.js` library in the head of your HTML file. Double check that you required the library correctly by typing `Chart` into the browser's console. A function should be returned, not "undefined". (Note, you should require the version of Chart.JS that we have stored in `js/vendor` directory)
* Require `weatherChart.js` below the lines where you required jQuery and Chart.js.
* In `init.js`, make a variable, `API_KEY`, and define it as the string of your Weather Underground key.
* Also in `init.js`, make a variable `URL` that will be the URL that your code will fetch hourly JSON data on New York city's weather. Read the [docs](http://www.wunderground.com/weather/api/d/docs?d=data/hourly) to figure out what it'll be. (INCLUDED IN LAB CODE)
* Get the weather data using a [fetch request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
* Associate each hour, in military time, with a temperature, in fahrenheit.
* Use the data you found in the line above to make a line chart with Chart.js. Refer to its [line chart docs](http://www.chartjs.org/docs/#line-chart-example-usage) for help. Render the chart in the canvas with the id `NYCWeatherChart`.

## Resources
* [Weather Underground](http://www.wunderground.com) - [Hourly](http://www.wunderground.com/weather/api/d/docs?d=data/hourly)
* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Chart.js](http://www.chartjs.org/docs/#getting-started) - [Line Charts](http://www.chartjs.org/docs/#line-chart-example-usage)

