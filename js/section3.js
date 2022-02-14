//section3.js
$(function(){
	
	var cnt=[0,0,0,0];
	
	setInterval(countFn0, 12.73885350);
	setInterval(countFn1, 10.13171226);
	setInterval(countFn2, 28.57142857);
	setInterval(countFn3, 60.24096386);
	
	function countFn0(){
		cnt[0]++;
		
		if( cnt[0]<=785 ){
			$('.sec3Num').eq(0).text(cnt[0]);
			
		}
	
	}
	function countFn1(){
		cnt[1]++;
		
		if( cnt[1]<=987 ){
			$('.sec3Num').eq(1).text(cnt[1]);
			
		}
		
	}

	function countFn2(){
		cnt[2]++;
		
		if( cnt[2]<=350 ){
			$('.sec3Num').eq(2).text(cnt[2]);
			
		}
		
	}

	function countFn3(){
		cnt[3]++;
		
		if( cnt[3]<=166 ){
			$('.sec3Num').eq(3).text(cnt[3]);
			
		}
		
	}
	
});