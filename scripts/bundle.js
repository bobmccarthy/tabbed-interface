(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var all=$('#tabs');
var redButton = $('#redButton');
var greenButton = $('#greenButton');
var blueButton = $('#blueButton');
var redText = $('#redText');
var greenText = $('#greenText');
var blueText = $('#blueText');

hideText();

//this is mayb for one function instead of three
// all.on('click', function(){
// 	hideText();
// 	this.value().css({display: 'block'});
// });

redButton.on('click', function () {
	hideText();
	redText.css({ display: 'block' });
	redButton.css({ backgroundColor: '#CECECE' });
});
greenButton.on('click', function () {
	hideText();
	greenText.css({ display: 'block' });
	greenButton.css({ backgroundColor: '#CECECE' });
});
blueButton.on('click', function () {
	hideText();
	blueText.css({ display: 'block' });
	blueButton.css({ backgroundColor: '#CECECE' });
});

function hideText() {
	redText.css({ display: 'none' });
	greenText.css({ display: 'none' });
	blueText.css({ display: 'none' });
	redButton.css({ backgroundColor: 'white' });
	greenButton.css({ backgroundColor: 'white' });
	blueButton.css({ backgroundColor: 'white' });
}

// redButton.click(onButtonClick);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map