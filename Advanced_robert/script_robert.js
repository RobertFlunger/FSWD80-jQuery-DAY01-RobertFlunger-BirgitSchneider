$("a").attr("href", "http://www.codefactory.wien");
$("code").css("color", "red");
$("ol > li").css("background-color", "#2a7b90");
$("form > p > textarea").attr("placeholder", "Express your opinion");
$("img").attr("src", "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
$("blockquote").css({ "background-color" : "orange"} , {"font-style" : "italic" });
$("#logo").css("color", "black");
$("span.gray").css("color", "white");
$("span.date").remove();

var side = ["New Templates", "Order Template", "Contact Us"];
console.log(side);

for (let i=0; i<3; i++) {
	$("ul.sidemenu:first").append("<li><a href=''>" + side[i] + "</a></li>");
}

$("#sidebar > p:first").text("\"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.\"");

