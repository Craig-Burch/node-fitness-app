const bodyParser = require('body-parser');

const middlewares = [
  bodyParser.urlencoded()
];

const publicPath2 = path.join(__dirname, '../app');


app.use(express.static(publicPath2));




//first attempt at returning the submit form

jQuery('#submit-form').on('submit', function (e) {
	e.preventDefault();

	socket.emit('createfrontendReply', {
		from: 'user',
		text: jQuery('[name=Gender]').val()
	}, function () {
      
	});
});



// 2nd attempt

//index.js
jQuery('#submit-form').on('submit', function (final) { //user input
      e.preventDefault();

	var inp = jQuery('[name=Gender]').val();
	inp.option(`${final.input}: ${final.text}`;

		jQuery('#submit-form').append(inp);
});

//2nd attpemt

//server.js
socket.emit('#submit-form', {   //log for user input?
	input: '[name=Gender]',
	text: 'very nice'
});






//3rd attempt index.js


jQuery('#submit-form').on('submit', function (e) { //this stops string return is url
	e.preventDefault();
	
	var select = document.querySelector('select');

	select.addEventListener('change', setAdvice);

	function setAdvice() {
    var genderSelection = select.value;
    var ageSelction = select.value2;

  if (genderSelection === 'male' && ageSelction === '10-15' ) {
    para.textContent = 'you are a youngling';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

});