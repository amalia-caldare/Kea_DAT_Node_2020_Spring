/* 1 - 5 Exercises
    Styling
1. Change the body tag so that everything on the page is centered.
2. Change the text of "Old title" to "New title".
3. Change the background color of the subtitle box to any color you like.
4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM. Hint: ZGlzcGxheTogbm9uZQ==
5. Put a dashed border box of any pixel width around any div that has the class "reason"
*/

$("body").css("text-align", "center");
$("#title h2").text("New title");
$(".subtitle-box").css("background-color", "yellow");
$(".temp").hide(); //$(".temp").css("display","none");
$("div.reason").css("border", "dashed blue 4px")

/* 6 - 8 Exercises
Ordered list: Traversing the DOM
6. Change the li's inside of the ordered list to be bold. Hint: RGlyZWN0IGNoaWxkIHNlbGVjdG9ycw== 
7. Change the last li to be underlined.  Hint: cHNldWRvIHNlbGVjdG9ycw==
8. Change the second li element to have a line through it. 
*/

$("ol li ").css("font-weight","bold");
$("#first-list li:last").css("text-decoration", "underline");
$('#first-list li:nth-child(2)').css("text-decoration", "line-through");

/* 9 - 10 Exercises
Unordered List
9: Change all the elements inside of the second-list to italics in one query. Hint: VGhlIGNoaWxkcmVuIHNlbGVjdG9yLiBBbmQgbXVsdGlwbGUgc2VsZWN0b3I=
10. Change the span font size in the unordered list to be half as small. Using em is better than pixels. Why is that? 
 */

 $("#second-list").css("font-style","italic"); 
 $("#second-list span").css("font-size", "0.5 em");