//API Key//
var APIKey = "94fb4992412a398a9fb2333272321439";

//on click function/ local storage of city value
$(".btn-small").on('click', function(event){
    event.preventDefault();
    console.log("good job!");
    var city = $("#value").val().trim();
 
    weatherDaily(city);
})  

// Daily Weather function with the URL we need to query the database
function weatherDaily(city) {

        // remove previous weather data
        $(".city-name").empty();
        $(".date").empty();
        $(".icon").empty();
        $(".temp").empty();
        $(".humid").empty();
        $(".wind").empty();
        
        //weather input styling// 
        var weatherPosition = $("#weather");
        $("#weather").append(weatherPosition).css({"position":"absolute", "margin-top":"460px"}); 

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=94fb4992412a398a9fb2333272321439"

    // AJAX call to the OpenWeatherMap for Daily Weather
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        //variables for daily weather response array//
        var nameCity = response.name;
        //console.log(nameCity);
        var date = response.dt;
        //console.log(date);
        var dayDate = moment.unix(date).format("LL");
        //console.log(dayDate);
            var iconUrl = "https://openweathermap.org/img/wn/";
            var iconCity = response.weather[0].icon; 
            var iconPng = "@2x.png";
            var icon = iconUrl + iconCity + iconPng;
            var iconImg = $("<img>");
            iconImg.attr("src", icon);
            // console.log(iconImg);
        var tempCity = response.main.temp;
        //change the temp from celsius to farenheight 
            var fDegree = ((tempCity - 273.15) * 1.8 + 32).toFixed(0);
        // console.log(tempCity);
        var humidCity = response.main.humidity;
        // console.log(humidCity);
        var windCity = response.wind.speed;
        // console.log(windCity);
        
        $(".city-name").append(nameCity);
        $(".date").text(dayDate); 
        $(".icon").append(iconImg);
        $(".temp").append("Temperature: " + fDegree + "°F");
        $(".humid").append("Humidity: " + humidCity + "%");
        $(".wind").append("Wind Speed: " + windCity + "MPH").css({"margin-bottom":"60px"});

        //if else statements that change background//
        if (fDegree >= 80) {
          eventsHot(city);
          console.log("it's hot!");
          $("#myVideo").addClass('hide');
          $("#video-hot").removeClass('hide');
          $("#video-cold").addClass('hide');
        } else if (fDegree < 80 && fDegree > 60) {
            eventsMid(city);
            $("#video-hot").addClass('hide');
            $("#video-cold").addClass('hide');
            $("#myVideo").removeClass('hide');
        } else if (fDegree <= 59) {
            eventsCold(city);
            console.log("it's cold!");
            $("#myVideo").addClass("hide");
            $("#video-cold").removeClass('hide');
            $("#video-hot").addClass('hide');
        }

      })
      }

//mid temperature events//
function eventsMid(city) {
  var oArg = {
    app_key: "nnvHmLFmL3fNTWwG",
    q: "sports",
    where: city,
    date: "LL",
    page_size: 5,
    sort_order: "popularity",
    total_items: 5,
  }

  EVDB.API.call("/events/search", oArg, function(oData) {

    console.log(oData);
    // Note: this relies on the custom toString() methods below

    var activities = $("#activities")
    $("#activities").append(activities).css({"background-color":"white","opacity":"0.7","color":"black", "position":"absolute", "margin-top":"870px", "margin-bottom":"30px"});

    var image = $("#image0")
    image.attr({"src": oData.events.event[0].image.medium.url,"height": "200px", "width": "200px"});
    var act = $("#activities")
    act.append(image)

    //time//
    // var start = oData.events.event[0].start_time;
    // //console.log(start);
    // var startTime = moment.unix(start).format("L");
    // console.log(startTime);

    $("#city-activity0").text(oData.events.event[0].city_name + " , " + oData.events.event[0].region_name).css({"margin":"0"});
    $("#start-time0").text("Start-Time: " + oData.events.event[0].start_time);
    $("#addy0").text("Address: " + oData.events.event[0].venue_address);
    $("#venue0").text("Venue: " + oData.events.event[0].venue_name);
    $("#title0").text(oData.events.event[0].title);
    $("#link0").attr("href", oData.events.event[0].venue_url);
    console.log(oData.events.event[0].venue_url)

    //mid events 2//
    var image = $("#image1")
    image.attr({"src": oData.events.event[1].image.medium.url,"height": "200px", "width": "200px"});
    var actOne = $("#activities1")
    actOne.append(image)

    $("#activities1").append(actOne).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1400px", "margin-bottom":"30px"});

    //images//
    var image = $("#image2")
    image.attr({"src": oData.events.event[2].image.medium.url,"height": "200px", "width": "200px"});
    var actTwo = $("#activities2")
    actTwo.append(image)

    $("#city-activity1").text(oData.events.event[1].city_name + " , " + oData.events.event[1].region_name);
    $("#start-time1").text("Start-Time: " + oData.events.event[1].start_time);
    $("#addy1").text("Address: " + oData.events.event[1].venue_address);
    $("#venue1").text("Venue: " + oData.events.event[1].venue_name);
    $("#title1").text(oData.events.event[1].title);
    $("#link1").attr("href", oData.events.event[1].venue_url);
    console.log(oData.events.event[1].venue_url)

    //mid event background 3//
    $("#activities2").append(actTwo).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1890px", "margin-bottom":"30px"});

    $("#city-activity2").text(oData.events.event[2].city_name + " , " + oData.events.event[2].region_name);
    $("#start-time2").text("Start-Time: " + oData.events.event[2].start_time);
    $("#addy2").text("Address: " + oData.events.event[2].venue_address);
    $("#venue2").text("Venue: " + oData.events.event[2].venue_name);
    $("#title2").text(oData.events.event[2].title);
    $("#link2").attr("href", oData.events.event[2].venue_url);
    console.log(oData.events.event[2].venue_url)
  });
}

//hot events//
function eventsHot(city) {
  var oArgs = {
      app_key: "nnvHmLFmL3fNTWwG",
      q: "attractions",
      where: city,
      date: "2020021000-2020022000",
      page_size: 5,
      sort_order: "popularity",
      total_items: 5,
  };
  EVDB.API.call("/events/search", oArgs, function (oData) {
      console.log(oData);
      // Note: this relies on the custom toString() methods below
      var image = $("#image0")
      image.attr({ "src": oData.events.event[0].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities")
      imgDiv.append(image)

      //hot event info //
      $("#activities").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-bottom":"30px"});

      $("#city-activity0").text(events.event[0].city_name  + " , " + oData.events.event[0].region_name);
      $("#start-time0").text("Start-Time: " + oData.events.event[0].start_time);
      $("#addy0").text("Address: " + oData.events.event[0].venue_address);
      $("#venue0").text("Venue: " + oData.events.event[0].venue_name);
      $("#title0").text(oData.events.event[0].title);
      $("#link0").attr("href", oData.events.event[0].venue_url);
      console.log(oData.events.event[0].venue_url)

      var image = $("#image1")
      image.attr({ "src": oData.events.event[1].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities1")
      imgDiv.append(image)

      // //background//
      $("#activities1").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1400px", "margin-bottom":"30px"});

      $("#city-activity1").text(events.event[1].city_name   + " , " + oData.events.event[1].region_name);
      $("#start-time1").text("Start-Time: " + oData.events.event[1].start_time);
      $("#addy1").text("Address: " + oData.events.event[1].venue_address);
      $("#venue1").text("Venue: " + oData.events.event[1].venue_name);
      $("#title1").text(oData.events.event[1].title);
      $("#link1").attr("href", oData.events.event[1].venue_url);
      console.log(oData.events.event[1].venue_url)

      var image = $("#image2")
      image.attr({ "src": oData.events.event[2].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities2")
      imgDiv.append(image)

      // //background//
      $("#activities2").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1890px", "margin-bottom":"30px"});

      $("#city-activity2").text(events.event[2].city_name   + " , " + oData.events.event[2].region_name);
      $("#start-time2").text("Start-Time: " + oData.events.event[2].start_time);
      $("#addy2").text("Address: " + oData.events.event[2].venue_address);
      $("#venue2").text("Venue: " + oData.events.event[2].venue_name);
      $("#title2").text(oData.events.event[2].title);
      $("#link2").attr("href", oData.events.event[2].venue_url);
      console.log(oData.events.event[2].venue_url)
  });
}

//cold events//
function eventsCold(city) {
  var oArgs = {
      app_key: "nnvHmLFmL3fNTWwG",
      q: "music",
      where: city,
      date: "2020021000-2020022000",
      page_size: 5,
      sort_order: "popularity",
      total_items: 5,
  };
  EVDB.API.call("/events/search", oArgs, function (oData) {
      console.log(oData);
      // Note: this relies on the custom toString() methods below

      //first cold activity//
      var image = $("#image0")
      image.attr({ "src": oData.events.event[0].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities")
      imgDiv.append(image)

      $("#activities").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"870px", "margin-bottom":"30px"});

      $("#city-activity0").text(oData.events.event[0].city_name + " , " + oData.events.event[0].region_name);
      $("#start-time0").text("Start-Time: " + oData.events.event[0].start_time);
      $("#addy0").text("Address: " + oData.events.event[0].venue_address);
      $("#venue0").text("Venue: " + oData.events.event[0].venue_name);
      $("#title0").text(oData.events.event[0].title);
      $("#link0").attr("href", oData.events.event[0].venue_url);
      console.log(oData.events.event[0].venue_url)

      //second cold activity//
      var image = $("#image1")
      image.attr({ "src": oData.events.event[1].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities1")
      imgDiv.append(image)

      $("#activities1").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1400px", "margin-bottom":"30px"});

      $("#city-activity1").text(oData.events.event[1].city_name + " , " + oData.events.event[1].region_name);
      $("#start-time1").text("Start-Time: " + oData.events.event[1].start_time);
      $("#addy1").text("Address: " + oData.events.event[1].venue_address);
      $("#venue1").text("Venue: " + oData.events.event[1].venue_name);
      $("#title1").text(oData.events.event[1].title);
      $("#link1").attr("href", oData.events.event[1].venue_url);
      console.log(oData.events.event[1].venue_url)

      //third cold activity//
      var image = $("#image2")
      image.attr({ "src": oData.events.event[2].image.medium.url, "height": "200px", "width": "200px" });
      var imgDiv = $("#activities2")
      imgDiv.append(image)

      $("#activities2").append(imgDiv).css({"background-color":"white", "opacity":"0.7","color":"black", "position":"absolute", "margin-top":"1890px", "margin-bottom":"60px"});

      $("#city-activity2").text(oData.events.event[2].city_name + " , " + oData.events.event[2].region_name);
      $("#start-time2").text("Start-Time: " + oData.events.event[2].start_time);
      $("#addy2").text("Address: " + oData.events.event[2].venue_address);
      $("#venue2").text("Venue: " + oData.events.event[2].venue_name);
      $("#title2").text(oData.events.event[2].title);
      $("#link2").attr("href", oData.events.event[2].venue_url);
      console.log(oData.events.event[2].venue_url)
  });
}

// var nav = (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       }
//       var test =
//       {
//         origin: pos,
//         destination: 'Los Angeles, CA',
//         provideRouteAlternatives: false,
//         travelMode: 'DRIVING',
//         drivingOptions: {
//           departureTime: new Date(/* now, or future date */),
//           trafficModel: 'pessimistic'
//         },
//         unitSystem: google.maps.UnitSystem.IMPERIAL
//       }
//       console.log(test)
//     });