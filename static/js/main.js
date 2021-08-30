(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {
	  console.log("Toggle")
	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

	$("#login-button").click(function(){
        // var password = $("#in-password").val();
		let endpoint = "http://192.168.1.58/api/auth/login";
		console.log("singin");
        // event.preventDefault();
        $.ajax({
            type : "POST",
            url : endpoint,
			// async: true,
			// headers : ({
			// 	"accept": "application/json",
			// 	"Access-Control-Allow-Origin":"*"
			// }),
            data : ({
                username : $("#in-username").val(),
                password : $("#in-password").val()
            }),
            success : function(result){
				console.log("Success", result);
				$(location).attr(href,"http://www.google.com");
            }, 
			error: function(xhr, status, err) {
				console.log("err", err);
			  }
        });
    });
})(jQuery);
