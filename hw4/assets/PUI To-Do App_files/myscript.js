
var addTask = function(title, dueDate, assignees) {
	var list = document.querySelector('#taskList');
	var task = document.createElement('BUTTON');
	if (title == undefined) {
		var title = document.querySelector('#taskTitle').value;
		var dueDate = document.querySelector('#taskDueDate').value;
		var assignees = document.querySelector('#taskAssignees').value;
	}
	
	if (title != "") {
		task.appendChild(document.createTextNode(title));
		task.setAttribute("type", "button");
		task.setAttribute("id", "task");
		task.addEventListener("click", function(){ doSomething(this, event); });

		var closeBtn = document.createElement('BUTTON');
		closeBtn.setAttribute("class", "close");
		closeBtn.setAttribute("aria-label", "Close");
		closeBtn.setAttribute("id", "close");
		closeBtn.style.paddingLeft = "5px";
		closeBtn.addEventListener("click", function(){ doSomething(this, event); });
		var closeSpan = document.createElement('span');
		closeSpan.setAttribute("aria-hidden", "true");
		closeSpan.setAttribute("id", "close");
		closeSpan.innerHTML = "&times;";
		closeBtn.appendChild(closeSpan);
		task.appendChild(closeBtn);
		
		var dateLabel = document.createElement('span');
		dateLabel.setAttribute("id", "dateLabel");
		dateLabel.setAttribute("class", "label label-default pull-right");
		dateLabel.appendChild(document.createTextNode(dueDate));
		task.appendChild(dateLabel);

		if (assignees != undefined) {
			var assigneesLabel = document.createElement('span');
			assigneesLabel.setAttribute("id", "assigneesLabel");
			assigneesLabel.setAttribute("class", "label label-primary pull-right");
			assigneesLabel.appendChild(document.createTextNode(assignees));
			task.appendChild(assigneesLabel);
		}

		task.setAttribute("class", "list-group-item");
		list.appendChild(task);
		document.querySelector("#addTaskForm").reset();
	}
}

var doSomething = function(selElem, event) {
	// if the close button was selected
	if (selElem.className == 'close') {
		deleteTask(selElem.parentElement);
	}
	// don't mark a task complete if the close button was selected
	else if (event.target.id != 'close') {
		markComplete(selElem);
	}
}

var deleteTask = function(task) {
	console.log("delete!");
	var list = document.querySelector('#taskList');
	list.removeChild(task);
}

var markComplete = function(task) {
	console.log("complete!");
	task.setAttribute("class", "list-group-item list-group-item-success");
	task.querySelector("#dateLabel").setAttribute("class", "label label-success pull-right");

	var list = document.querySelector('#taskList');
	list.appendChild(task);
}

// addTask('take out the garbage', 'Today');
// addTask('wash the dishes', 'Tomorrow');
// addTask('do laundry', 'Oct 3', 'Michael');
// addTask('clean up office', 'Oct 5');
// addTask('buy a cake', 'Oct 10');