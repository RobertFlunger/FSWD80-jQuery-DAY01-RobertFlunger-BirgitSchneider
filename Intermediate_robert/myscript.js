$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

/*$("#myform").remove();*/
var fivedivs = $('<div></div><div></div><div></div><div></div><div></div>');
$("article").append(fivedivs);
$("#msg").attr("value","Search for...");
$("article div").addClass("box");
$("p a").attr("href","http://www.codefactory.wien");