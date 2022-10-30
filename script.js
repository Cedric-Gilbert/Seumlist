var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = ul.getElementsByTagName("li");
var i = 1;
var checkBoxList = document.getElementsByClassName("ckb");
/////////////////////
function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createCheckboxItem();
	}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.which === 13) {
	createCheckboxItem();
	}
}

///////////////////// Add a list item + checkbox
function createCheckboxItem () {
        var li = document.createElement("li");
		var checkBox = document.createElement("input");
		var deleteButton = document.createElement("input");
		// Add delete button
		deleteButton.setAttribute("type", "button");
		deleteButton.setAttribute("value", "Supprimer ce seum");
		ul.appendChild(deleteButton);
		// Add checkbox
		checkBox.setAttribute("type", "checkbox");
		checkBox.setAttribute("id", "prodName" + i);
		checkBox.setAttribute("class", "ckb");
		// Add li
		li.setAttribute("id", "prodName" + i);
        ul.appendChild(checkBox);
        li.appendChild(deleteButton);
        li.appendChild(checkBox);
       	li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
		input.value = "";
		i++;
		// Add line-through when checkbox is checked 
		checkBox.addEventListener("click", function() {
			if (checkBox.checked) {
				li.className = "done";
				} 
				else {li.className -= "done";
				}
			}
		);
		// Delete when button is clicked
		deleteButton.addEventListener("click", function() {
			li.remove();
		})

}

/////////////////////
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);