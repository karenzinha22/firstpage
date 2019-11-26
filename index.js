$('.weatherButton').click(async function() {
	const res = await $.ajax(
		'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=422a17de83e046d3aaa5a0bab4dbb87b'
	);

	$('.weather-info').replaceWith(res.weather[0].description);
});
