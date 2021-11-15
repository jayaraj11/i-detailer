var clickHandler = 'click';
$(document).ready(function () {
	trackAction('tracking_element_id1');
	if ('ontouchstart' in document.documentElement) {
		clickHandler = "touchstart";
	}



	$(".popup-1").swipe({
		swipe: function (event, direction, distance, duration, fingerCount) {
			var popup = $(event.target).closest('.popup').hasClass("popup");
			if (!$(".block").is(":visible") && !$(event.target).hasClass('noSwipe') && !$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable') && popup != true) {
				if (direction == 'right') {
					
				    document.location = "veeva:prevSlide()";
				}
				if (direction == 'left') {
				
					document.location = "veeva:nextSlide()";

					
				}
			}
		}
	});
	
	$(".popup-2").swipe({
		swipe: function (event, direction, distance, duration, fingerCount) {
			var popup = $(event.target).closest('.popup').hasClass("popup");
			if (!$(".block").is(":visible") && !$(event.target).hasClass('noSwipe') && !$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable') && popup != true) {
				if (direction == 'right') {
		
					$(".popup-1").show();
					$(".popup-2,.popup-3").hide();
				}
				if (direction == 'left') {
				$(".popup-3").show();
				$(".popup-1,.popup-2").hide();
			
				}
			}
		}
	});

	$(".popup-3").swipe({
		swipe: function (event, direction, distance, duration, fingerCount) {
			var popup = $(event.target).closest('.popup').hasClass("popup");
			if (!$(".block").is(":visible") && !$(event.target).hasClass('noSwipe') && !$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable') && popup != true) {
				if (direction == 'right') {
		
					$(".popup-2").show();
					$(".popup-1,.popup-3").hide();
				}
				if (direction == 'left') {
				// $(".popup-3").show();
				// $(".popup-1,.popup-2").hide();
			
				}
			}
		}
	});
	
});
