
function hideAndShowDetails(detailId, iconId) {
    if ($(detailId).is(':visible')) {
        $(detailId).removeClass('block').addClass('hidden');
        $(iconId).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
        $(detailId).removeClass('hidden').addClass('block');
        $(iconId).removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
}


function getWeather() {

    const city = 'dhaka';
    const API_KEY = 'd9a1714370e8493c27fd4b07601cd9b1';
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY;

    
    axios.get(weatherURL).then(function (response) {
        
        temp = 'Temperature:  ' + (response.data.main.temp - 273).toFixed(2) + '  °C';
        feel = 'Feels Like:  ' + (response.data.main.feels_like - 273).toFixed(2) + '  °C';
        humidity = 'Humadity:  ' + response.data.main.humidity + '  %';
        wind = 'Wind:  ' + response.data.wind.speed + '  Km/h';
        $('#temparature').text(temp)
        $('#feel_like').text(feel)
        $('#humidity').text(humidity)
        $('#wind').text(wind)

    }).catch(function(error) {
        console.log(error);
    });



    $('#weather').removeClass('hidden').addClass('block');
    setTimeout(() => {
        $('#weather').removeClass('block').addClass('hidden');
    }, 5000);
}