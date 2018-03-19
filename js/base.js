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
function initialize() {
    $(".sub-level").hide();
    setInterval('updateClock()', 1000);
}
$(document).ready(function()
{

   $(".General").mouseenter(function() {
       $(".sub-level.General").show();
   })
   $(".sub-level.General").mouseleave(function() {
       $(".sub-level.General").hide();
   });

   $(".Classes").mouseenter(function() {
       $(".sub-level.Classes").show();
   })
   $(".sub-level.Classes").mouseleave(function() {
       $(".sub-level.Classes").hide();
   });


   $(".Reddit").mouseenter(function() {
       $(".sub-level.Reddit").show();
   })
   $(".sub-level.Reddit").mouseleave(function() {
       $(".sub-level.Reddit").hide();
   });

   $(".Entertainment").mouseenter(function() {
       $(".sub-level.Entertainment").show();
   })
   $(".sub-level.Entertainment").mouseleave(function() {
       $(".sub-level.Entertainment").hide();
   });

   $(".Configuration").mouseenter(function() {
       $(".sub-level.Configuration").show();
   })
   $(".sub-level.Configuration").mouseleave(function() {
       $(".sub-level.Configuration").hide();
   });
});
