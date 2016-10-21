
// jQuery

$(document).ready(function(){
    $(".taskrow").on("mousedown", complete); // when task clicked, make it complete
    $("#create").on("click", addFromForm); // "create" btn adds task
});

// when task selected, make green, animate off to the left, then remove
function complete() {
	$(this).addClass("complete").delay(50).animate({left: -$(document).width()}, 500, function() {$(this).remove();});
	check(); // check if all tasks are complete
}

// if task list is empty, show msg
function check() {
	var count = $("#taskList #task").length;
	if (count == 1) {
		$("#done").delay(500).animate({opacity: 1}); // show "you finished"
	}
}

// wrapper for "add", processes form values then adds task
function addFromForm() {
	var titleVal = $("#taskTitle").val();
	var dueVal = $("#taskDueDate").val();
	var assignee = $("#taskAssignee").val();
	var hasAttach = $("#taskAttach").is(":checked");
	var hasPriority = $("#taskPriority").is(":checked");

	add(titleVal, dueVal, assignee, hasAttach, hasPriority);
}

// 
function add (titleVal, dueVal, assignee, hasAttach, hasPriority) {
	// if title empty, cancel and show error
	if (titleVal.length == 0) {
		var error = $("<div>", {"class": "error", "id": "error"});
		error.append("Your task must have a title!");
		$("#taskList").prepend(error);
		$("#error").delay(750).animate({opacity: 0}, 500, function() {$(this).remove();});
	}
	// else, add task
	else {
		var task = $("<div>", {"class": "container taskrow", "id": "task"});

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
			case "(none)":
				image = false
			case "":
				image = false
		}

		// assignee
		var profile = $("<div>", {"class": "task-profile"});
		var profileImg = $("<div>", {"class": "circle"});
		// if no assignee, draw empty circle else place profile picture
		if (image == false) {
			profileImg.css("border", "2px solid lightgray");
		} 
		else {
			profileImg.css("background-image", "url(assets/prof/" + image + ".jpg)");
		}
		profile.append(profileImg);

		// title
		var title = $("<div>", {"class": "task-title"});
		title.append(titleVal);

		// due
		var due = $("<div>", {"class": "task-due"});
		due.append(dueVal);

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
		$("#done").animate({opacity: 0}); // hide "you finished"
	}
}

// demo tasks
add("find a costume", "Oct 31", "Michael", true, true);
add("study for PUI midterm", "Oct 24", "", false, false);
add("do UCRE hw", "Oct 11", "Tim", false, true);
add("buy a cake", "Oct 10", "Rebecca", false, false);
add("clean up office", "Oct 5", "", false, false);
add("do laundry", "Oct 3", "Robert", false, false);
add("wash the dishes", "Tomorrow", "", false, false);
add("take out garbage", "Today", "Michael", true, true);
add("paint porch", "Today", "Sara", false, false);