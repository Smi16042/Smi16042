$(document).ready(function(){
$.getJSON( "../js/scriptone.json", function (data){
    console.log(data);
        $(".five").text(data.lolking);    
});    
});
