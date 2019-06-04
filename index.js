var myList = document.getElementsByTagName("li");
for(let i = 0; i < myList.length; i++){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

var form = document.getElementById('addForm');
console.log(form)
form.addEventListener('submit', newList);

function newList(e){
	e.preventDefault();
	var li = document.createElement("li");
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


