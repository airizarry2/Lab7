function init() {
	//add your javascrip between these two lines of code

	//Creates variable button 
	var button = document.getElementById('entrybutton');

	//Adds eventlistener for clickable button
	//Creates the alert at the top of page and replaces the value for H2
	button.addEventListener('click', function () {

		var output = document.getElementById('textoutput');
		var enInput = document.getElementById('entryinput');
		
		
		alert('Anthony Irizarry: ' + enInput.value);
		output.innerHTML = enInput.value;
	});


}

window.addEventListener('load', init);
