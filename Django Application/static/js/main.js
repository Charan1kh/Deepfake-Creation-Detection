// NAVBAR - SECTION
$(document).ready(function () {
	$(".fa-bars").click(function () {
		$(this).toggleClass("fa-times");
		$(".navbar").toggleClass("nav-toggle");
	});

	$(window).on("load scroll", function () {
		$(".fa-bars").removeClass("fa-times");
		$(".navbar").removeClass("nav-toggle");

		if ($(window).scrollTop() > 30) {
			$(".header").css({
				background: "#282B2E",
				transition: ".2s",
				"box-shadow": "0 5px 20px rgba(0, 0, 0, 0.3)",
			});
		} else {
			$(".header").css({ background: "none", "box-shadow": "none" });
		}
	});
});
