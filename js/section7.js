jQuery(function(){
	
	//scrollTop()>섹션6-300px 도달시
	//그래프 애니메이션 동작
	//그 미만이면 초기화
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > $('#section6').offset().top-200 ){
			//else때문에 앞에 애니메이션 초기값 안적어도 됨
			$('.graphe').eq(0).stop().animate({width:80+'%'},1000);
			$('.graphe').eq(1).stop().animate({width:90+'%'},1000);
			$('.graphe').eq(2).stop().animate({width:95+'%'},1000);
			$('.graphe').eq(3).stop().animate({width:90+'%'},1000);
		}
		else{
			$('.graphe').eq(0).stop().animate({width:0},500);
			$('.graphe').eq(1).stop().animate({width:0},500);
			$('.graphe').eq(2).stop().animate({width:0},500);
			$('.graphe').eq(3).stop().animate({width:0},500);
			
		}
	});
	
	
});
//section7.js