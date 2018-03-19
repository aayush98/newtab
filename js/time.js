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

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
   // $("body").mouseenter(function() {
   //     $('.clock').css('visibility','visible');
   // })
   // .mouseleave(function() {
   //     $('.clock').css('visibility','hidden');
   // });
});
