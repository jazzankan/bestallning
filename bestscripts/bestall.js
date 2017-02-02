$(document).ready(function(){
	
	var student = false;
	
    $("form#authform").submit(function(e){
		e.preventDefault();
		$("#auth").hide();
		$("#main").show();
		if($("input[name=kortnr]").val() === "stud"){
			student = true;
		}
	});
	
	if($('#RadioGroup1_0').is(':checked')){
		$('.bok').show();
		$('.artikel').hide();
		$(".format").show();
		if(student === true){$(".betala").show()};
		$(".meddelande").show();
		$(".bradska").show();	
	}
	if($('#RadioGroup1_1').is(':checked')){
		$('.artikel').show();
		$('.bok').hide();
		$(".meddelande").show();
		$(".bradska").show();	
	}
	$('#RadioGroup1_0' ).on( "click", function() {
    $('.bok').show();
	$('.artikel').hide();
	$(".format").show();
	if(student === true){$(".betala").show()};
	$(".meddelande").show();
	$(".bradska").show();	
});

$('#RadioGroup1_1' ).on( "click", function() {
    $('.artikel').show();
	$('.bok').hide();
	$(".meddelande").show();
	$('.format').hide();
	$(".bradska").show();	
});
});