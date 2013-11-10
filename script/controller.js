"use strict";
		
function Controller() {
	var maketable = new makeTable();
		
	this.init = function() {  
					$("#first_r_add").on("click", maketable.firstAddrow);	
				    $("#center_r_add").on("click", maketable.centerAddrow);					
				    $("#last_r_add").on("click", maketable.lastAddrow);
					
					$("#first_c_add").on("click", maketable.firstAddcolumn);
					$("#center_c_add").on("click", maketable.centerAddcolumn);
					$("#last_c_add").on("click", maketable.lastAddcolumn);
					
					
			        $("#first_r_remove").on("click", maketable.firstRemoverow);
					$("#center_r_remove").on("click", maketable.centerRemoverow);
					$("#last_r_remove").on("click", maketable.lastRemoverow);
					
					$("#first_c_remove").on("click", maketable.firstRemovecolumn);
					$("#center_c_remove").on("click", maketable.centerRemovecolumn);
					$("#last_c_remove").on("click", maketable.lastRemovecolumn);
					
					
				};	
				
	return this;				
}
					
					
				
					

					
					
					
				