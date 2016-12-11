$(document).ready(function(){
$.getJSON( "../js/scriptone.json", function (data){
    console.log(data);
        $(".five").text(data.lolking);    
});    
});


 $.getJSON( "../js/scriptone.json", function( data ) {
  var items = []; 
  $.each( data, function( key, val ) {
      items.push( "'text' alt='" + key + "'src='" + val + "'/>");
  });
 
  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.five" );
});

