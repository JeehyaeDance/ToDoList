var form = document.getElementById('addForm');
console.log(form)
form.addEventListener('submit', newList);

function newList(e){
	e.preventDefault();
	var li = document.createElement("li");
	console.log(li);
	var inputValue = document.getElementById("task").value;
	var t = document.createTextNode(inputValue);

	li.appendChild(t);
	if(inputValue === ''){
		alert("You must write something!");
	} 
	else {
		document.getElementById("list").appendChild(li);
	}
}