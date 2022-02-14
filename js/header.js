//header.js
jQuery(function(){
	var t=0;	//앱바메뉴 버튼 토글변수
	var scr=0;	//스무스 스크롤 이벤트 토글변수
	var url='';
	
		mobileFormatFn();
	
		//앱바메뉴 버튼 이벤트
		$('.appbarBt').on({
			click:	function(e){
				e.preventDefault();
				$('.appbar-line').toggleClass('addClassAppbarX');
				if( t==0 ){
					t=1;
					$('.appbar-menu-wrap').stop().animate({right:(100* 0)+'%'},300,'swing');	
				}
				else{
					t=0;
					$('.appbar-menu-wrap').stop().animate({right:(100*-1)+'%'},300,'swing');
				}
			}
		});
		
		
		$(window).resize(function(){
			mobileFormatFn();
		});
		
		function mobileFormatFn(){
			if( $(window).innerWidth()>1170 ){
				t=0;
				$('.appbar-menu-wrap').stop().animate({right:(100*-1)+'%'},0,'swing');
				$('.appbar-line').removeClass('addClassAppbarX');
			}		
		}
	
	
	//선택자(selctor) : smoothBt을 클릭하면 부드럽게 이동
	//속성(attribute : attr) href='#이동할바로가기아이디' 해당 $('#해당아이디').offset().top 탑위치로 이동
	
	$('.smoothBt').on({
		click:	function(event){
			
			//앱바메뉴 초기화
			if( t==1 ){
				t=0;
				$('.appbar-line').toggleClass('addClassAppbarX');
				$('.appbar-menu-wrap').stop().animate({right:(100*-1)+'%'},300,'swing');
			}
			
			//상단에서 스크롤시 섹션2의 탑값에서 부드럽게 멈추는 이벤트와  
			//클릭이벤트의 중복되는 이벤트를 해결하기 위해서 필요 event.preventDefault();
			event.preventDefault(); //이전의 이벤트 취소하고 나머지 실행
			//$(window).off('scroll');
			
			scr=1; //스크롤 이벤트 동작된걸로 인식하게 하고 다음섹션으로 이동하게 만든다.
			
			url = $(this).attr('href'); //#wrap, #section2..
			//부드럽게이동(스무스 스크롤링)
			$('html,body').stop().animate({ scrollTop: $( url ).offset().top-60 },400,'swing');
			
		}
	});
	
	//if 상단스클롤이벤트 스크롤탑값(scrollTop())이  30px이상 헤더에 클래스추가(addClass())
	$(window).scroll(function(){
		
		if( $(window).scrollTop()>30 && $(window).scrollTop() < $('#section2').offset().top-60  ){
			
			if( scr==0 ){
				scr=1;
				$('html,body').stop().animate( { scrollTop: $('#section2').offset().top-60 },600,'swing' );
			}
			
		}	
		
		if( $(window).scrollTop()>30 ){
			
			scr=1;
			
			
			$('#header').addClass('addClassHeader');
			$('.header-nav-wrap>ul>li>h2').addClass('addClassHeader');
			$('.header-nav-wrap>ul>li>h2').addClass('addClassHeader');
			$('.header-nav-wrap>ul>li>span').addClass('addClassHeader');
			$('.header-nav-wrap>ul>li>nav>ul').addClass('addClassHeader');
			$('.appbar-wrp>span').addClass('addClassHeader');
			$('.appbar-menu-wrap').addClass('addClassHeader');
			$('.header-aside-wrap>ul').addClass('addClassHeader');
			$('.gotop').stop().animate({opacity:1},500);
			
			
			
		}	
		else{ //스크롤탑값이 30 이하이면 초기화
			scr=0;
			$('#header').removeClass('addClassHeader');
			$('.header-nav-wrap>ul>li>h2').removeClass('addClassHeader');
			$('.header-nav-wrap>ul>li>h2').removeClass('addClassHeader');
			$('.header-nav-wrap>ul>li>span').removeClass('addClassHeader');
			$('.header-nav-wrap>ul>li>nav>ul').removeClass('addClassHeader');			
			$('.appbar-wrp>span').removeClass('addClassHeader');			
			$('.appbar-menu-wrap').removeClass('addClassHeader');			
			$('.header-aside-wrap>ul').removeClass('addClassHeader');	
			$('.gotop').stop().animate({opacity:0},500);

			
		}
	});
	
	
});