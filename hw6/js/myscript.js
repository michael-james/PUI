// filtering
$(".cat").on("click", function() {
	var name = $(this).find("span");
	var text = name.contents().filter(function() {
  		return this.nodeType == 3;
	}).text();
	alert("FILTER BY: " + text);
	// console.log(name);
	// add physics to items
	// move relevant items up to top using animation
});

// portfolio items
$(".circle").on("click", function () {
	alert("modal!");
});

$(".circle").hover(
	function () {
		$(".circle-overlay").animate({opacity: "1"}, 300);
	},
	function () {
		$(".circle-overlay").animate({opacity: "0"}, 300);
	}
);

// $(window).on('resize orientationChange', function(event) {
    
// });


// because I'm working with the physics library created by Mr. Doob,
// a lot of the javascript will be playing with it and figuring out what works
// so unfortunately it's hard for me to put much pseudo-code here