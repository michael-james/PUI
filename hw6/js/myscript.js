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

// // var c=document.getElementById("myCanvas");
// // var ctx=c.getContext("2d");
// // ctx.fillStyle="#FF0000";
// // ctx.fillRect(20,20,150,100);

// // pattern test
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// // var img = document.getElementById("lamp")
// // var pat = ctx.createPattern(img, direction);
// // ctx.rect(0, 0, 150, 100);
// // ctx.fillStyle = pat;
// // ctx.fill();

// // var img = new Image();
// // img.src = "../assets/nature.jpg"; 
// var img = document.getElementById("nature");
// var pattern = context.createPattern(img, "repeat");
// // test_background.onload = function(){
	
// // };

// ctx.fillStyle = pattern;
// // ctx.fillStyle = "#FF0000";
// // ctx.fill();
// ctx.fillRect(0, 0, c.width, c.height);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
var img = document.getElementById("nature");
var pat = ctx.createPattern(img, "no-repeat");
ctx.rect(0, 0, c.width, c.height);
ctx.fillStyle = pat;
ctx.fill();

// // var img = new Image();
// // img.src = "../assets/nature.jpg"; 

// because I'm working with the physics library created by Mr. Doob,
// a lot of the javascript will be playing with it and figuring out what works
// so unfortunately it's hard for me to put much pseudo-code here