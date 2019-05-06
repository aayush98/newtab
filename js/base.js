function updateClock (){
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ) ? "0" + currentMinutes : currentMinutes;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes;



   	$(".clock").html(currentTimeString);

}

function displayTimeOfDay() {
    let time = new Date().getHours();
    if (time >= 0 && time <= 3) return 'night';
    if (time >= 4 && time <= 11) return 'morning';
    if (time >= 12 && time <= 16) return 'afternoon';
    if (time >= 17 && time <= 24) return 'evening';
    console.log(time);
}

function setGreeting() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Good ${displayTimeOfDay()}, Idiot!`;
}


function initialize() {
    // $(".sub-level").hide();
    // showQuote();
    setGreeting();
    setInterval('updateClock()', 1000);
}
