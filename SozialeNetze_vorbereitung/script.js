window.onload = function(){
	var create = document.getElementById("create_new_btn");
	create.onclick = function() {new_todo();} 
    
    var impressum = document.getElementById("impressum_btn");
	impressum.onclick = function() {goto_impressum();} 
    
    var edit = document.getElementById("edit_btn");
	edit.onclick = function() {goto_edit();} 

	var edit = document.getElementById("delete_btn");
	edit.onclick = function() {delete_todo();} 
    
    function goto_impressum(){
        window.location.href = "impressum.html"; 
    }
	function new_todo() {
		window.location.href = "create_new.html"; 
	}
    
    function goto_edit() {
		window.location.href = "edit_todo.html"; 
	}

	function delete_todo(){
		confirm("Möchtest du das ToDo wirklich löschen?");
	}
  
}