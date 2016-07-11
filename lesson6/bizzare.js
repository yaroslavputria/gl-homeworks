"use strict";
/*
	###Задание 1 - необязательное:
	You need to find all values of attribute named "base64" in bizzare.html.
	After that make one long string and decode it. Mind the name of attribute. Follow instructions.
*/

var allEl = document.querySelectorAll("[base64]"),
	oneLongString = [].map.call(allEl, function(item) {
 		return item.getAttribute("base64");
 	}).join("");

var decodedRes = atob(oneLongString);

console.log(decodedRes);

//Create and execute function like: Function(string),
//where string is concatenated value of all Comment nodes from this document


// var re = /<!--[\s\S]*?-->/g,
// 	allText = document.body.innerHTML,
// 	allComments = allText.match(re);

// var funcText = allComments.map(function(item) {
// 	return item.slice(4, (item.length - 3));
// }).join("");

//eval(funcText);

var allComments = [],
	myTreeWalker = document.createTreeWalker(
		document.body,
		NodeFilter.SHOW_COMMENT,
		{
			acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } 
		},
		false
	);

while (myTreeWalker.nextNode()) {
	allComments.push(myTreeWalker.currentNode.nodeValue);
};

eval(allComments.join(""));

