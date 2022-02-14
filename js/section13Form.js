jQuery(function(){
	
	$('.error').removeClass('error-message');
	$('.success-text').removeClass('success-message');
	// $('#interested').find('option').eq(2).prop('selected', true);
	// $('#interested>option').eq(0).prop('selected', true);
	// $('#interested>option:eq(2)').prop('selected', true);
	
	//폼 전송 버튼을 클릭하면 submitBt
	//유효성검사를 수행한다.
	//폼 요소( irum, mail, message ) 빈값 체크
	//만약 빈값이 발생하면 오류 메시지 하단에 보이고
	//빈값이 있는 입력상자 요소에 빨간 테두리가 나오는 addClass 메소드 실행
	//빈값이 없다면 
	//메일 입력상자의 @ 유무 체크 . 유무체크 
	//모두 이상없으면 전송
	//전송 성공 메시지 하단에 표시(청색 메시지 박스)

	//영문, 숫자만 입력 가능 한글안됨, 키업 될때 영문,숫자 아니면 삭제
	$('#mail').on({
		keyup:	function(){		
			var hangulCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;   //정규형 표현식 한글
			if( hangulCheck.test( $(this).val() )){  //한글이 포함되어 있으면 삭제
                 $(this).val('');
            } 
		}
	});
	
	$('.submitBt').on({
		click:	function(){
			
			$('.success-text').removeClass('success-message');
			$('.error').eq(3).removeClass('error-message');
			
			var txtIrum =		$('#irum').val();
			var txtMail =		$('#mail').val();
			var txtInterested= $('#interested').val();
			var txtMessage =	$('#message').val();			
			
			var _n = $('#mail').val().indexOf('@');   		//moonjong@
			var txt = $('#mail').val().slice(0,_n);  		//처음부터 @위치전까지 문자 추출(@ 앞글자)	

			var _n2 = $('#mail').val().indexOf('.');
			var txt2 = $('#mail').val().slice(_n+1,_n2);  	//@다음 위치 ~ .전까지 문자 추출(. 앞글자 )

			var txt3 = $('#mail').val().slice(_n2+1);  	//.위치다음 ~ 	끝까지(. 뒷글자)

			//오류 안뜨는 if조건
			if( $('#irum').val()!='' && $('#mail').val()!='' &&  
				$('#message').val()!='' && $('#mail').val().indexOf('@')!=-1 && 
				$('#mail').val().indexOf('.')!=-1 && txt.length>=2 && txt2.length>=2 && txt3.length>=2 ){
				
				$('.error').removeClass('error-message');
				//memberForm.submit(); //전송
				/*1. $.ajax({});
				
				  2. $.ajax({
				  	url:'member.php',
				  	type:'POST',
				  	data:{	//폼전송
				  		
				  	},
				  	success:function(data){
				  		
				  	},
				  	error:function(){
				  		
				  	}
				  });*/
				
				$.ajax({
					url:'member.php',
					type:'POST',
					data:{
						irum:		txtIrum,
						mail:		txtMail,
						interested: txtInterested,
						message:	txtMessage
					},
					success: function(data){
						$('.ajax-loader').addClass('submit')
						
						setTimeout(function(){
						$('.ajax-loader').removeClass('submit')
							
							$('.success-text').addClass('success-message');
							
							//폼 요소 내용 삭제 정리
							$('#irum').val('');
							$('#mail').val('');
							$('#interested').find('option').eq(0).prop('selected', true);
							//$('#interested option').eq(0).prop('selected', true);
							$('#message').val('');
							$('#irum').focus(); //재입력 대기로 전환, 커서 입력 대기상태로 깜빡인다.
							
							
						},2000);
					},
					error:	 function(){
						console.log('ajax error!');
						
					}
				});
			}
			else{ //오류가 뜨면
			
				$('.success-text').removeClass('success-message');
			
				//바로 로더 대기상태의 애니메이션 이미지가 돈다. 2초간
				$('.ajax-loader').addClass('submit');
				//그리고
				//모든 에러에 추가되는 addClass() 테두리 배경 노랑 모두가 2초후에 실행한다. 
				setId = setTimeout(errorMessageFn,1000);
				
				//<테두리 빨강 오류 메시지> - 이름, 메일, 메시지 li에 클래스 추가 addClass('error-message') 
				function errorMessageFn(){
					clearTimeout( setId );
					$('.ajax-loader').removeClass('submit');
					
					//이름박스
					if( $('#irum').val()=='' ){ //이름이 빈칸이면
						$('.error').eq(0).addClass('error-message');
					}
					else{
						$('.error').eq(0).removeClass('error-message');
					}
					//메일빈칸이거나 골뱅이가 없거나 .이 없거나 txt골뱅이전글자길이2이하, .이전글자길이2이하, .이후글자길이2이하이면
					if( $('#mail').val()=='' || $('#mail').val().indexOf('@')==-1 || $('#mail').val().indexOf('.')==-1 || txt.length<2 || txt2.length<2 || txt3.length<2 ){ //메일이 빈칸이면
						$('.error').eq(1).addClass('error-message'); //에러메세지 애드클래스한다.(빨강테두리)
					}
					else{
						$('.error').eq(1).removeClass('error-message'); //그렇지않으면 리무브클래스한다.
					}
					
					if( $('#message').val()=='' ){ //메시지가 빈칸이면
						$('.error').eq(2).addClass('error-message');
					}
					else{
						$('.error').eq(2).removeClass('error-message');
					}
					
					//노랑 박스 배경 에러메시지 문장 박스  모든 조건이 맞아야 노랑색 안나온다. 
					if( $('#irum').val()=='' || $('#mail').val()=='' || $('#message').val()=='' || $('#mail').val().indexOf('@')==-1 || $('#mail').val().indexOf('.')==-1 || txt.length<2 || txt2.length<2 || txt3.length<2){
						$('.error').eq(3).addClass('error-message');
					}
					else{
						$('.error').eq(3).removeClass('error-message');
					}	
				}
					
				return false; //버튼 클릭을 취소한다.
			}
		}
	});
	
});//section13Form.js























