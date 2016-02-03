var days =0

$('#addDay').click(function(){
	++days
	$('#days').append('<li class="today"><button type="button" id="addDay" class="btn btn-default" aria-label="Left Align">'+ days +'</button><span class="minus glyphicon glyphicon-minus" aria-hidden="true"></span></li>')
})
$('#panelCtrl').click(function(){
	$('.planning').fadeToggle( "fast", "linear" )
})
$('#dayCtrl').click(function(){
	$('.day').fadeToggle( "fast", "linear" )

})

$(document).on('click', '.minus', function(){
	--days
	$(this).parent().remove()

})

$(document).on('click', '.today', function(){
	$(this).append('<ul><li>Hotel</li><li>Restuarants</li><li>Activities</li></ul>')
					
})

