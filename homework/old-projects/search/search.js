 $('#query').keyup(function(){
   var value = $('#query').val();
   var rExp = new RegExp(value, "i");
        $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
                console.log(data);
                $('#query').keyup(function(){
                    var value = $('#query').val();
                    var rExp = new RegExp(value, "i");
                $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
                    var output ='<ol>';
                        $.each(data.RESULTS, function(key, val) {
                        if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page
  }); // end getJSON
}); // end onkeyup

    output += '</ol>';
    $("#searchResults").html(output); // send results to the page
  }); // end getJSON
}); // end onkeyup
        


// Current Location Scripts
$(function getData(lat,long) {


         
        $.ajax({
              
              url : "https://autocomplete.wunderground.com/aq?query=query" + lat + ',' + long + ".json",
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
  });



        
      $("#cover").fadeOut(250);
    
           

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

