var APIKey = "7c5ff53a72bccf11a9b6c285cf436a47";
function events(userInput) {
    var oArgs = {
      app_key: "nnvHmLFmL3fNTWwG",
      q: "sports",
      where: userInput,
      date: "2020021000-2020022000",
      page_size: 5,
      sort_order: "popularity",
      total_items: 5,
    };
    EVDB.API.call("/events/search", oArgs, function(oData) {
      console.log(oData);
      // Note: this relies on the custom toString() methods below
      var image = $("#image0")
      image.attr({"src": oData.events.event[0].image.medium.url,"height": "200px", "width": "200px"});
      var imgDiv = $("#activities")
      imgDiv.append(image)
      $("#city-activity0").text("City: " + oData.events.event[0].city_name);
      $("#region-name0").text("State: " + oData.events.event[0].region_name);
      $("#start-time0").text("Start-Time: " + oData.events.event[0].start_time);
      $("#description0").text("Description: " + oData.events.event[0].description.replace("<p>",  " ").replace("<p>",  " ").replace("<p>",  " ").replace("<p>",  " ").replace("<p>",  " ").replace("</p>",  " ").replace("</p>",  " ").replace("</p>",  " ").replace("</p>",  " ").replace("</p>",  " "));
      $("#addy0").text("Address: " + oData.events.event[0].venue_address);
      $("#venue0").text("Venue: " + oData.events.event[0].venue_name);
      $("#title0").text("Title: " + oData.events.event[0].title);
      $("#link0").attr("href", oData.events.event[0].venue_url);
      //console.log(oData.events.event[0].venue_url)
      var image = $("#image1")
      image.attr({"src": oData.events.event[1].image.medium.url,"height": "200px", "width": "200px"});
      var imgDiv = $("#activities1")
      imgDiv.append(image)
      $("#city-activity1").text("City: " + oData.events.event[1].city_name);
      $("#region-name1").text("State: " + oData.events.event[1].region_name);
      $("#start-time1").text("Start-Time: " + oData.events.event[1].start_time);
      $("#description1").text("Description: " + oData.events.event[1].description);
      $("#addy1").text("Address: " + oData.events.event[1].venue_address);
      $("#venue1").text("Venue: " + oData.events.event[1].venue_name);
      $("#title1").text("Title: " + oData.events.event[1].title);
      $("#link1").attr("href", oData.events.event[1].venue_url);
      //console.log(oData.events.event[1].venue_url)
      var image = $("#image2")
      image.attr({"src": oData.events.event[2].image.medium.url,"height": "200px", "width": "200px"});
      var imgDiv = $("#activities2")
      imgDiv.append(image)
      $("#city-activity2").text("City: " + oData.events.event[2].city_name);
      $("#region-name2").text("State: " + oData.events.event[2].region_name);
      $("#start-time2").text("Start-Time: " + oData.events.event[2].start_time);
      $("#description2").text("Description: " + oData.events.event[2].description);
      $("#addy2").text("Address: " + oData.events.event[2].venue_address);
      $("#venue2").text("Venue: " + oData.events.event[2].venue_name);
      $("#title2").text("Title: " + oData.events.event[2].title);
      $("#link2").attr("href", oData.events.event[2].venue_url);
      console.log(oData.events.event[2].venue_url)
    });
  }
      $(".btn-small").on("click", function() {
        var userInput = $("#value").val()
        // Here we are building the URL we need to query the database
        var queryURL =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          userInput +
          "&appid=" +
          APIKey;
        // We then created an AJAX call
        getCalls(queryURL);
        events(userInput);
        eventsCat(userInput);
      });
function getCalls(url) {
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    // Create CODE HERE to log the resulting object
    console.log(response);
    let temp = Math.round(((response.main.temp - 273.15) * 9) / 5 + 32);
    $("#city").text("City: " + response.name);
    $("#temp").text("Temperature: " + temp + String.fromCharCode(176)+"F");
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#wind").text("Wind Speed: " + response.wind.speed);
    $("#icon").attr({"src": "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
     "height": "150px", "width":"150px"});
   });
};
function eventsCat(userInput) {
  var oArgs = {
    app_key: "nnvHmLFmL3fNTWwG",
    q: "sports",
    where: userInput,
    date: "2020021000-2020022000",
    page_size: 5,
    sort_order: "popularity",
    total_items: 5,
  };
  EVDB.API.call("/categories/list", oArgs, function(oData) {
    console.log(oData)
  })
}