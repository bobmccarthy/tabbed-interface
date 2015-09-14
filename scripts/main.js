'use strict';
// var all=$('#tabs');
var redButton=$('#redButton');
var greenButton=$('#greenButton');
var blueButton=$('#blueButton');
var redText=$('#redText');
var greenText=$('#greenText');
var blueText=$('#blueText');

hideText();


//this is mayb for one function instead of three
// all.on('click', function(){
// 	hideText();
// 	this.value().css({display: 'block'});
// });


redButton.on('click', function (){
	hideText();
	redText.css({display: 'block'});
	redButton.css({backgroundColor: '#CECECE'});
});
greenButton.on('click', function (){
	hideText();
	greenText.css({display: 'block'});
	greenButton.css({backgroundColor: '#CECECE'});
});
blueButton.on('click', function (){
	hideText();
	blueText.css({display: 'block'});
	blueButton.css({backgroundColor: '#CECECE'});
});

function hideText(){
	redText.css({display: 'none'});
	greenText.css({display: 'none'});
	blueText.css({display: 'none'});
	redButton.css({backgroundColor: 'white'});
	greenButton.css({backgroundColor: 'white'});
	blueButton.css({backgroundColor: 'white'});
}


// redButton.click(onButtonClick);