// var test_background = new Image();
// test_background.src = '../assets/nature.jpg'; 
// test_background.onload = function(){
//     var pattern = context.createPattern(this, "repeat");
//     context.fillStyle = pattern;
//     context.fill();
// };

function createBall( x, y ) {

	var x = x || Math.random() * stage[2];
	var y = y || Math.random() * -200;

	var size = 200;
	// var size = (Math.random() * 100 >> 0) + 20;

	var element = document.createElement("canvas");
	element.width = size;
	element.height = size;
	element.style.position = 'absolute';
	element.style.left = -200 + 'px';
	element.style.top = -200 + 'px';
	element.style.WebkitTransform = 'translateZ(0)';
	element.style.MozTransform = 'translateZ(0)';
	element.style.OTransform = 'translateZ(0)';
	element.style.msTransform = 'translateZ(0)';
	element.style.transform = 'translateZ(0)';

	var graphics = element.getContext("2d");

	var num_circles = Math.random() * 10 >> 0;

	for (var i = size; i > 0; i-= (size/num_circles)) {

		graphics.fillStyle = theme[ (Math.random() * 4 >> 0) + 1];
		graphics.beginPath();
		graphics.arc(size * .5, size * .5, i * .5, 0, PI2, true); 
		graphics.closePath();
		graphics.fill();
	}

	canvas.appendChild(element);

	elements.push( element );

	var b2body = new b2BodyDef();

	var circle = new b2CircleDef();
	circle.radius = size >> 1;
	circle.density = 1;
	circle.friction = 0.3;
	circle.restitution = 0.3;
	b2body.AddShape(circle);
	b2body.userData = {element: element};

	b2body.position.Set( x, y );
	b2body.linearVelocity.Set( Math.random() * 400 - 200, Math.random() * 400 - 200 );
	bodies.push( world.CreateBody(b2body) );
}