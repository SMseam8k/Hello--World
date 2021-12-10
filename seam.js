$(document).ready(function(){
	$(".player-info:first").hide(3000, function(){
	$ ('.player-info:last').hide(3000)
	});
	 $("img").click(function(){
    $(".player-info").fadeToggle();
  });
	 $("#voding").submit(function(){
  $("#voding-from").prepend("<div class='alert alert-success' role='alert'>Thank you "+
   $('voding-from input[name="name"]').val() +",for your vote! </div>");
   $('#voding').remove();

  return false;
 });	
  $('tr').click(function(){
  $(this).toggleClass('higlight');
  });

  $("#Massi").parent().before('<h2 class="text-center">Messi vs. Ronaldo</h2')
});

