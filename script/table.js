"use strict";
		
function makeTable() {		
	
	this.firstAddrow =	function() { 
							var newrow = $(".working_place").children(":first").clone(); 
					
							newrow.children().removeClass()
							.addClass("firstadd_row");
						   
							newrow.appendTo(".working_place"); 				
						};		  
	
	this.centerAddrow = function() { 
							var newrow = $(".working_place").children(":first").clone(), 
								index = getCenterrow();
							   
							newrow.children().removeClass()
							.addClass("centeradd_row");		
						   
							$($(".working_place").children()[index]).after(newrow); 		
						};	
	
	this.lastAddrow = 	function() { 
						   var newrow = $(".working_place").children(":first").clone(); 
					
						   newrow.children().removeClass()
						   .addClass("lastadd_row");
						   
						   newrow.prependTo(".working_place"); 							  	
						};						  
					  
					  
					  
	this.firstRemoverow =	function() { 
								$(".working_place").children(":last").remove(); 							   			
							};	

	this.centerRemoverow =  function() { 							
								var index = getCenterrow();
								
								$($(".working_place").children()[index]).remove(); 		
							};		
	
	this.lastRemoverow = 	function() { 
							$(".working_place").children(":first").remove();  	
							};		  
					  				
									
	
	this.firstAddcolumn = 	function() { 
								var rows = $(".working_place").children();								
								$.each(rows, firstAddcolumn);	
							};						
							
	this.centerAddcolumn =  function() { 
								var rows = $(".working_place").children();	
								$.each(rows, centerAddcolumn);
					        };		
					
		
	this.lastAddcolumn = 	function() { 
								var rows = $(".working_place").children();
								$.each(rows, lastAddcolumn);
							};
		
	
	
	this.firstRemovecolumn = 	function() { 
									var rows = $(".working_place").children();
									$.each(rows, firstRemovecolumn);
								};	
	
	this.centerRemovecolumn =	 function() { 
									var rows = $(".working_place").children();								
									$.each(rows, centerRemovecolumn) 		
								};	
	
	this.lastRemovecolumn = function() { 
								var rows = $(".working_place").children();
								$.each(rows, lastRemovecolumn)
					        };	
		
							  							  
	
	function firstAddcolumn(index, el) {	
		$(el).children(":first").clone()
		.removeClass()
		.addClass("firstadd_row")
		.prependTo(el); 		
	}
		
	function centerAddcolumn(index, el) {	
		var	cloned = $(el).children(":first").clone(), 
			inp_index = getCentercolumn_adding(index);	
			
		cloned.removeClass()
		.addClass("centeradd_row");
		$($(el).children()[inp_index]).after(cloned);		
	}		
	
	function lastAddcolumn(index, el) {		
		$(el).children(":last").clone()
		.removeClass()
		.addClass("lastadd_row")
		.appendTo(el); 		
	}
	
	
	function firstRemovecolumn(index, el) {	
		 $(el).children(":first").remove();	
	}
	
	function centerRemovecolumn(index, el) {			
		var del_index = getCentercolumn_deleting(index);				
		$($(el).children()[del_index]).remove();
	}
	
	function lastRemovecolumn(index, el) {	
		 $(el).children(":last").remove();	
	}
	
	
			
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
	
	function getCentercolumn_adding(correction) {
		var midindex;
		
	    if(correction == 0) {
			midindex = ($(".working_row:first").children().length)/2;	
		} 
		else {
			midindex = (($(".working_row:first").children().length)-1)/2;	
		}
			 
		midindex = Math.round(midindex) - 1;	
			
		return midindex;	
	}
		
	function getCentercolumn_deleting(correction) {
		var midindex;
		
	    if(correction == 0) {
			midindex = ($(".working_row:first").children().length)/2;	
		} 
		else {
			midindex = (($(".working_row:first").children().length)+1)/2;	
		}
			 
		midindex = Math.round(midindex) - 1;
		
		return midindex;	
	}
	
	return this;				
}
			