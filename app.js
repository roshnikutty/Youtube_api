var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi(searchTerm, callback) {
    console.log(searchTerm);
    var apiKey = "AIzaSyBp1sq-f7c2EdnAKhQvwlAQX_UuZXFItiw";
    var query = {
        q: searchTerm,
        part: 'snippet',
        key: apiKey
    }
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displayYoutubeSearchData(data) {
    console.log(data);var apiKey = "AIzaSyBp1sq-f7c2EdnAKhQvwlAQX_UuZXFItiw";
    var resultElement = "";
    if (data.items) {
        data.items.forEach(function (item) {
            resultElement =  resultElement + "<p><a href = https://www.youtube.com/watch/?v=" + item.id.videoId +"><img src = "+item.snippet.thumbnails.medium.url+"></a></p>";         
        });
    }
    else {
        return "No results were found.";
    }
    $(".js-results").html(resultElement);
}

$('.js-search-form').submit(function (event) {
    event.preventDefault();
    var inputValue = $(".user-input").val();
    getDataFromApi(inputValue, displayYoutubeSearchData);
});
