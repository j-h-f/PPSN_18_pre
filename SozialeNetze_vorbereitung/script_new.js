window.onload = function(){	
	var save = document.getElementById("todo_save");
	save.onclick = function() {save_data();}
    
    var create = document.getElementById("home");
	create.onclick = function() {goHome();} 
    
    function goHome() {
		window.location.href = "index.html"; 
	}
    
	function save_data(){
		var todo_text = document.getElementById("todo_text").value;
		var todo_deadline = document.getElementById("todo_deadline").value;
		var todo_progress = document.getElementById("todo_progress").value;

		alert( (todo_text + "\n" + todo_deadline + "\n" + todo_progress) );

		window.location.href = "index.html";
	}
}