
// jQuery

$(document).ready(function(){
    $(".taskrow").on("click", complete);
    $("#create").on("click", getFormVals);
});

function complete() {
	$(this).addClass("complete").delay(50).animate({left: -$(document).width()}, 500, function() {$(this).fadeOut().remove();});
}

function getFormVals() {
	// get values
	var titleVal = $("#taskTitle").val();
	var dueVal = $("#taskDueDate").val();
	var assignee = $("#taskAssignee").val();
	var hasAttach = $("#taskAttach").is(":checked");
	var hasPriority = $("#taskPriority").is(":checked");

	add(titleVal, dueVal, assignee, hasAttach, hasPriority);
}

function add (titleVal, dueVal, assignee, hasAttach, hasPriority) {
	var task = $("<div>", {"class": "container taskrow"});

	// set image
	var image;
	switch (assignee) {
		case "Michael": 
			image = "1";
			break;
		case "Rebecca": 
			image = "2";
			break;
		case "Robert": 
			image = "3";
			break;
		case "Sara": 
			image = "4";
			break;
		case "Tim": 
			image = "5";
			break;
		case "":
			image = false
	}

	// assignee
	var profile = $("<div>", {"class": "task-profile"});
	var profileImg = $("<div>", {"class": "circle", "style": "background-image: url(assets/prof/" + image + ".jpg)"});
	console.log(image);
	profile.append(profileImg);

	// title
	if (titleVal.length != 0) {
		var title = $("<div>", {"class": "task-title"});
		title.append(titleVal);
	}

	// due
	if (dueVal.length != 0) {
		var due = $("<div>", {"class": "task-due"});
		due.append(dueVal);
	}

	// attach
	if (hasAttach) {
		var attach = $("<div>", {"class": "task-attach"});
		var attachIcon = $("<img>", {"id": "attach-icon", "src": "assets/attach.svg", "height": "23px"});
		attach.append(attachIcon);
		attach.append(" 2");
	}

	// priority
	if (hasPriority) {
		var priority = $("<div>", {"class": "task-attach"});
		var priorityIcon = $("<img>", {"id": "priority-icon", "src": "assets/high.svg", "height": "15px"});
		priority.append(priorityIcon);
	}

	task.append(profile, title, due, attach, priority);
	task.on("click", complete);
	$("#taskList").prepend(task);
}

// demo tasks
add("wash the dishes", "Tomorrow", "", false, false);
add("take out garbage", "Today", "Michael", true, true);
add("paint porch", "Today", "Sara", false, false);

// addTask('take out the garbage', 'Today');
// addTask('wash the dishes', 'Tomorrow');
// addTask('do laundry', 'Oct 3', 'Michael');
// addTask('clean up office', 'Oct 5');
// addTask('buy a cake', 'Oct 10');

