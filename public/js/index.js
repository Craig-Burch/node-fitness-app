var socket = io();


socket.on('connect', function () {
 console.log('Connected to Server');

 socket.emit('createSub', {
 	to: 'admin',
 	text: 'hello, you have a viewer'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});


socket.on('newSubmission', function (asubmission) { //greet the user
	console.log('NewSubmission', asubmission);
	var li = jQuery('<li></li>');
	li.text(`${asubmission.for}: ${asubmission.text}`);

	jQuery('#messages').append(li);
});

socket.on('Header', function (above) { //show output
	console.log('Headert', above);
	var abo = jQuery('<p></p>');
	abo.text(`${above.header}:`);

	jQuery('#header').append(abo);
});

socket.on('outPut', function (out) { //show output
	console.log('outPut', out);
	var ans = jQuery('<p></p>');
	ans.text(`${out.YourAdvice}`);

	jQuery('#output').append(ans);
});

// jQuery('#submit-form').on('submit', function (e) { //this stops string return is url
// 	e.preventDefault();
	

// });


// $fname = $_POST['fname'];
// $lname = $_POST['lname'];
// $pnumber = $_POST['pnumber'];
// $email = $_POST['email'];
// $subject = $_POST['subject'];