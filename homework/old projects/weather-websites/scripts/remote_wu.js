// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
         
        $.ajax({
              
              url : "https://api.wunderground.com/api/0d30113166f2b59a/geolookup/conditions/q/" + lat + ',' + long + ".json",
              dataType : "jsonp",
              success : function(parsed_json) {
              var location = parsed_json['location']['city'];
              var temp_f = parsed_json['current_observation']['temp_f'];
              var city = parsed_json['location']['city'];
              var state = parsed_json ['location']['state'];
              var sum = parsed_json ['current_observation']['weather'];
              var addone = parsed_json ['current_observation']['wind_mph'];
              var addtwo = parsed_json ['current_observation']['icon'];
              var addthree = parsed_json ['current_observation']['precip_today_in'];
            
              
                  
              $("#cityDisplay").html(city + ", "  + state );
              $("title").html(city + ", "  + state);
              $("#currentTemp").html(Math.round(temp_f) + "&#176" + "F");
             
              $("#summary").html(sum);
              $("#add1").html("Wind Speed: " + addone + "mph");
              $("#add2").html("Current Weather: " + addtwo);
              $("#add3").html("Precipitation Today in Inches: " + addthree); 
                  
              
  }
  });
      
      $("#cover").fadeOut(250);
  }
});


        
      $("#cover").fadeOut(250);
    
           

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

