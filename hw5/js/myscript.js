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

$(".circle").hover(
	function () {
		$(".circle-overlay").css("opacity", "0.7");
		console.log("ugh");
	},
	function () {
		$(".circle-overlay").css("opacity", "0");
	}
);



// because I'm working with the physics library created by Mr. Doob,
// a lot of the javascript will be playing with it and figuring out what works
// so unfortunately it's hard for me to put much pseudo-code here