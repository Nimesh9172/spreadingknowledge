
function hide() {
	$('.callback-btn').css({ "display": 'block' })
	$('.callback-form-wrapper').css({ "display": 'none' })
}
function show() {
	$('.callback-btn').css({ "display": 'none' })
	$('.callback-form-wrapper').css({ "display": 'block' })
}

$(document).ready(function () {


	$(".navbar-collapse a").click(function () {
		$(".navbar-collapse").collapse("hide");
	});

	$("#cr1").owlCarousel({
		loop: false,
		margin: 20,
		autoWidth: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}

	});
	$("#cr2").owlCarousel({
		loop: false,
		margin: 20,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoWidth: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});


	$('.toggle-btn').click(function () {
		$(this).toggleClass("fa-plus")
		$(this).prev().toggleClass("clr")
		$(this).parent().next().animate({ height: 'toggle' },300)
	})




});