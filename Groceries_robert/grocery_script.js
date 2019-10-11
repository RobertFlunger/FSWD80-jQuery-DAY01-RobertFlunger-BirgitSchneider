var myData = groceries;

$.each(myData, function(i, item) {
		var $tr = $('<tr>').append(
			$('<td>').text(item.name),
			$('<td>').text(item.price),
			$('<td>').text(item.status).attr("id", "availability" + i),
			$('<td>').html("<img src='" + item.picture + "' style='height:200px'>"), 
			).appendTo("#grocery-list");
	})
	
	$("tr").css({"color" : "blue",
					"font-size" : "2em"});
	$("#grocery-list", "th", "td").css("border", "1px solid black");	
	$("#grocery-list").css({"width" : "1000px"});
	$("td").css({"text-align": "center",
		 "width": "200px",
		 "border" : "1px solid black"});

console.log(myData[0].status);
var length = myData.length;
var ScarceProducts = [];
var available = [];

for (let i=0; i<length; i++) {
	
if (myData[i].status <= 5) {
		$("#availability" + i).css("background-color", "red").addClass("scarce");
		scarceProducts = myData[i].name;
	} else if (myData[i].status <= 10) {
		$("#availability" + i).css("background-color", "yellow").addClass("normal");
	} else {
		$("#availability" + i).css("background-color", "green").addClass("highavailability");
		available[i] = myData[i].name;
	}
	}

console.log(scarceProducts);
console.log(available.filter(Boolean));

$("p").append(scarceProducts).css("color", "red");
$("table").css("margin", "0 auto");
$("h1").css("text-align", "center");
/*
$(function(){
	
})

$("#grocery-list").css("width", "1000px");
*/



/*$(function(){
	$.each(myData, function(i, item) {
		var $tr = $('<tr>').append(
			$('<td>').text(item.name),
			$('<td>').text(item.price),
			$('<td>').text(item.status),
			$('<td>').html("<img src='" + item.picture + "' style='width:200px'>"), 
			).appendTo("#grocery-list");
	})
})*/


