"use strict";
		
function makeTable() {	
	
	this.firstAddrow = function() { 
						   var newrow = $(".working_place").children(":first").clone(); 
					
						   newrow.children().removeClass().addClass("firstadd_row");
						   newrow.appendTo(".working_place"); 		
		
					   };		  
	
	this.centerAddrow = function() { 
						   var newrow = $(".working_place").children(":first").clone(), 
							   index = getCenterrow();
						   newrow.children().removeClass().addClass("centeradd_row");
							//  var childrens = $(".working_place").children();
							//   $(childrens[index]).after(newrow); 
						   $($(".working_place").children()[index]).after(newrow); 		
				 	   };	
	
	this.lastAddrow = 	function() { 
						   var newrow = $(".working_place").children(":first").clone(); 
					
						   newrow.children().removeClass().addClass("lastadd_row");
						   newrow.prependTo(".working_place"); 	
						  	
						};	
					  
					  
					  
	this.firstRemoverow =	function() { 
								var newrow = $(".working_place").children(":last"); 
								newrow.remove(); 							   			
							};	

	this.centerRemoverow =  function() { 							
								var index = getCenterrow();
								//  var childrens = $(".working_place").children();
								//   $(childrens[index]).remove(); 
								$($(".working_place").children()[index]).remove(); 		
							};		
	
	this.lastRemoverow = 	function() { 
								var newrow = $(".working_place").children(":first");							
								newrow.remove();  	
							};	
					  
					  
					  
	this.firstAddcolumn = 	function() { 
								var rows = $(".working_place").children();
								$.each(rows, function() {
												 $(this).children(":first").clone()
												 .removeClass()
												 .addClass("firstadd_row")
												 .prependTo(this); 										 
											 });	
							};
	
	this.lastAddcolumn = 	function() { 
								var rows = $(".working_place").children();
								$.each(rows, function() {
												 $(this).children(":last").clone()
												 .removeClass()
												 .addClass("lastadd_row")
												 .appendTo(this); 										 
											 });	
							};
	
	this.firstRemovecolumn = function() { 
								var rows = $(".working_place").children();
								$.each(rows, function() {
												 $(this).children(":first").remove();												 									 
											 });
						     };	
	
	this.lastRemovecolumn = function() { 
								var rows = $(".working_place").children();
								$.each(rows, function() {
												 $(this).children(":last").remove();												 									 
											 });
					       };	
	
	this.centerRemovecolumn = function() { 
								var rows = $(".working_place").children();
								var indexx = getCentercolumn();
								$.each(rows, function() {
											
												 $($(this).children()[indexx]).remove();												
											 });							
							  };	
							  							  
							  
	this.centerAddcolumn = function() { 
								var rows = $(".working_place").children(),									
									indexx = getCentercolumn();	
									
								$.each(rows, function() {
												 var cloned = $(rows).children(":first").clone();
												 cloned.removeClass();
												 cloned.addClass("centeradd_row");
												 $($(this).children()[indexx]).after(cloned);												 												  
											 });
					       };	
						  
	
	function getCenterrow() {	
		var midindex = ($(".working_place").children().length)/2;		 
		midindex = Math.round(midindex) - 1;
		
		return midindex;
	}
	
	function getCentercolumn() {
		var midindex = ($(".working_row:first").children().length)/2;		 
		midindex = Math.round(midindex) - 1;	
				
		return midindex;	
	}
	
	return this;				
}
			