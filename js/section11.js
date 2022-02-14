//section11.js
$(function(){
	
	$('.section11-content-list>ul>li').on({
		mouseenter:	function(){
			
			$(this).addClass('addSec11Hover');
		},
		focusin:	function(){
			
			$(this).addClass('addSec11Hover');
		},
		mouseleave:	function(){
			
			$(this).removeClass('addSec11Hover');
		},
		focusout:	function(){
			
			$(this).removeClass('addSec11Hover');
		}
		
	});
	
});