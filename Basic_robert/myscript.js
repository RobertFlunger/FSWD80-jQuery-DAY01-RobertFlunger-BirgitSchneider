/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
/*$("p").css("background-color", "yellow");*/

// the p element with an ID of "intro"
/*$("p#intro").css("background-color", "yellow");*/


// all elements with a class of "note"
/*$(".note").css("background-color", "yellow");*/

// all DIV elements with a class of note
/*$("div.note").css("background-color", "yellow");*/

// all p elements in the article element
/*$("article p").css("background-color", "yellow");*/

// the last element in any section which is a p tag
/*$("p:last-of-type").css("background-color", "yellow");*/

// the first paragraph on the page
/*$("p:first").css("background-color", "yellow");*/

// all p elements which have a link
/*$("p:has(a)").css("background-color", "yellow");
*/
// the second li within nested ul element
/*$("ul li:eq(2)").css("background-color", "yellow");*/

// every second and third p element
$("p:nth-child(2n), p:nth-child(3n)").css("background-color", "yellow");