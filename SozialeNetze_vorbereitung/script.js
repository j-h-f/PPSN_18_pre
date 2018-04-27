window.onload = function(){
	var create = document.getElementById("create_new_btn");
	create.onclick = function() {new_todo();} 
    
    var impressum = document.getElementById("impressum_btn");
	impressum.onclick = function() {goto_impressum();} 
    
    var edit = document.getElementById("edit_btn");
	edit.onclick = function() {goto_edit();} 
    
    
    function goto_impressum(){
        window.location.href = "impressum.html"; 
    }
	function new_todo() {
		window.location.href = "create_new.html"; 
	}
    
    function goto_edit() {
		window.location.href = "edit_todo.html"; 
	}
  
}