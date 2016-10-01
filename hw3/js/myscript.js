
var showImage = function (whichImg) {
	if (whichImg == "great") {
		var source = "images/awesome.jpeg";
	}
	else if (whichImg == "terrible") {
		var source = "images/cry.jpeg";
	}

	var pic = document.createElement("img");
	pic.setAttribute("src", source);
	pic.setAttribute("id", "image");
	document.querySelector("#imgContainer").appendChild(pic);
	pic.addEventListener('click', deleteImage)

	alert("I am an alert box!");

	// prompt
	var person = prompt("Please enter your name", "Harry Potter");
	var para = document.createElement("P");                       // Create a <p> element
	var t = document.createTextNode(person);       				// Create a text node
	para.appendChild(t);                                          // Append the text to <p>
	document.body.appendChild(para);                              // Append <p> to <body>
}

var deleteImage = function() {
	var divId = "#".concat(this.parentElement.id);
	var container = document.querySelector(divId);
	console.log(container);
	var pic = document.querySelector("#image");
	console.log(pic)
	container.removeChild(pic);
	// pic.style.visibility = "hidden";
}



























































/* 
This function should add both an image and a reset button
hints: you will need the method setAttribute for source, Id and addEventListener (click)
You can make use of document.querySelector. To select by ID, choose #
Takes as argument a string that indicates which image to show
*/
//var showImage = function(which){
    //hint: start with an if/else clause
//    if (which == "great"){
//        var source = "";
//    }
//    else if (??){
//        ??;
//    }
    //first, add image
//    var pic = document.createElement("img");
//    pic.setAttribute("src", ???);//where will you get the file from?
//    pic.setAttribute("id", ???);//choose 
//    document.querySelector(??).appendChild(???);//hint: use the id of the div tag where you will be //storing your image, and then add the image element as a child of that tag. Hint 2: remember that you //gave the div tag an id of "imgContainer"
//    //use similar steps to add reset button (hint: use function below!)
//    
//    
//}
///*
//creates and returns a reset button
//*/
//var addReset = function () {
//    var btn = document.createElement(???);
//    var txt = document.createTextNode(???);
//    btn.setAttribute("id", ???);
//    btn.appendChild(???);
//    btn.addEventListener("click", someFunctionCHANGE);//delete image on click. Remember: in html, use "onclick", but in javascript use "click", "SomeFunction"
//    return btn;
//}
//    

/*
//removes both the reset button and the pic associated with it
//*/
//var deleteImage = function() {
//    var divId = "#".concat(this.parentElement.id);
//    var imageDiv = document.querySelector(divId);
//    //var btnID = ???;
//    var btn = document.querySelector(btnID);
//    //var pic = ???;
//    imageDiv.removeChild(btn);
//    //?? how to remove image as well?
//    
//}
