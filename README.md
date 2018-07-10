
# Visualizing Temperature

## Problem Statement

Many public APIs require some degree of authentication in order to use them.
Taking the time to learn how to set up authentication and use it within a fetch
request will open up access to huge amounts of free, useful data.

In this lab, we will be practicing the use of an API that requires
authentication as well as exploring an example of how to present API data in an
interesting, appealing way.


## Objectives

* Build a page that uses data from the [Weather
Underground](http://www.wunderground.com/weather/api/) to render a line chart
using [Chart.js](http://chartkick.com/). It should look something like the
picture below

![example pic](http://ironboard-curriculum-content.s3.amazonaws.com/web-development/js-weather-api-ajax/example.png "Pic of Example")

* Learn how to use `fetch` to keep data current.
* Use a JavaScript visualization library.

## Instructions

Sign up for an account to generate an Open Weather Map API key
[here](https://openweathermap.org/appid). You'll use this key for API calls. It
may take around 10 minutes before your API key is fully activated, so in the
mean time, start writing out the necessary JavaScript you will need inside `js/index.js`

This API uses URL parameters for queries, meaning that the whatever is entered
into our form will need to be included with the URL, along with your API key.
Use the API documentation to find examples of how to structure these parameters.

* In `index.html`, there is an existing form for input of a city name. Create an
event listener that, on 'submit', sends a fetch request to the Open Weather API.
The beginning of the url for your fetch request should be the following:

```js
`https://api.openweathermap.org/data/2.5/weather?`
```

* Upon successful response, use the provided HTML table and ids to populate the
DOM with weather information

**Note:** It is a good idea to `console.log` the JSON output of your fetch requests. If
you are testing your code and sending frequent API requests, you may hit your
rate limit and stop receiving data, and logging the JSON output will let you see
if this is occurring.  If you have hit your limit, wait for a few minutes before
trying again. Trying too many times while at a rate limit may cause your API key
to be deactivated for 24 hours.

* Make sure your code handles any spaces entered into your form. Submissions like
'New York' should return the correct weather data. For URL parameters, these
spaces are typically represented with a `+` symbol. This API is not perfect, so
while 'New York' will work, fetching with a term like 'New York City' will
return an error regardless of what you do.

* Create a _second_ fetch request for a _different_ endpoint on the Open Weather
API, this time, the 5 day forecast. This time, use the following as a base for
your fetch URL:

```js
`https://api.openweathermap.org/data/2.5/forecast?`
```

In the returned JSON data, there is a list array of weather forecasts for every
three hours for the next five days. Iterate over this array and display each
3-hour forecast as its own `div` that displays `dt_txt`, `temp`, and `humidity`.
Append these `div`s within the `<aside>` element in `index.html`.

* Bonus: Using the 5-day forecast data and the [ChartJS][chartjs] library, render
a line graph in `index.html`. The library has already been made available in
`index.html` and the canvas element is provided, but you'll need to use the
examples in the [ChartJS][example] documentation to figure out how to display
the chart on the page. Within the `json.list` from the weather API, use the
`dt_txt` values as labels and `main.temp` as data.


## Resources

* [Open Weather API](https://openweathermap.org/)
* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[geo]: https://www.w3schools.com/htmL/html5_geolocation.asp
[api]: https://openweathermap.org/current
[chartjs]: https://www.chartjs.org/
[example]: http://www.chartjs.org/docs/latest/
