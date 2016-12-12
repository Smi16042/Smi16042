   $.getJSON( "../js/roster.json", function( data ) {
  var items = []; 
  $.each( data, function( key, val ) {
      console.log(data); 
      items.push( "<img class=' ,' alt='" + key + "'src='" + val + "'/>");
  });
 
  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.roster" );
});
    