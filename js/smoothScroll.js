jQuery(function(){
	//선택자(selctor) : smoothBt을 클릭하면 부드럽게 이동
	//속성(attribute : attr) href='#이동할바로가기아이디' 해당 $('#해당아이디').offset().top 탑위치로 이동
	var url='';
	
	$('.smoothBt').on({
		click:	function(event){
			//상단에서 스크롤시 섹션2의 탑값에서 부드럽게 멈추는 이벤트와  
			//클릭이벤트의 중복되는 이벤트를 해결하기 위해서 필요 event.preventDefault();
			scr=1;
			event.preventDefault(); //이전의 이벤트 취소하고 나머지 실행
			url = $(this).attr('href'); //#wrap, #section2..
			//부드럽게이동(스무스 스크롤링)
			$('html,body').stop().animate({ scrollTop: $( url ).offset().top-60 },600,'swing');
			
		}
	});
	
	
	
});
//smoothScroll.js