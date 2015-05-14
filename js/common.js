$(document).ready(function() {

	// slider
	$('.js-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		cssEase: 'linear',
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 1
	});

	// tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			$(this).parents(".js-tab-group").find(".js-tab-cont:first").addClass('is-active');
			$(this).find("li:first").addClass('is-active');
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				$('.js-tab-item').removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.removeClass('is-active');
				$(this).parents(".js-tab-group").find("."+index).addClass("is-active");
				return false;
			});
		});
	}
	tab();

	// maps
	var map;
	var chicago = new google.maps.LatLng(41.850033, -87.6500523);

	function ZoomControl(controlDiv, map) {

		var controlWrapper = document.createElement('div');
		controlWrapper.className = 'js-zoom';
		controlDiv.appendChild(controlWrapper);

		var zoomInButton = document.createElement('div');
		controlWrapper.appendChild(zoomInButton);

		google.maps.event.addDomListener(zoomInButton, 'click', function() {
		  map.setZoom(map.getZoom() + 1);
		}); 

	}

	$('.js-zoom-map').on('click', function () {
		$('.js-zoom > div').trigger('click');
	});

	function initialize() {
		var mapDiv = document.getElementById('map');

		var mapOptions = {
		  zoom: 12,
		  center: chicago,
		  disableDefaultUI: true
		}

		map = new google.maps.Map(mapDiv, mapOptions);

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new ZoomControl(zoomControlDiv, map);

		zoomControlDiv.index = 200;
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
	}

	initialize();

	$('#fullpage').fullpage({
		anchors: ['firstSlide', 'secondSlide', '3rdSlide', '4thSlide'],
		scrollOverflow: true,
		css3: true
	});
	
});
