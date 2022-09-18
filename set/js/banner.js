// $.noConflict();
// var bby$ = jQuery;

$(function(){ 
        //화면실행직후 
        var _classNm = 'prev'; // if가 실행되도록 초기값설정
        var autoTimer =  setInterval( function(){ 
            _setTimefun($('.timer').html(), _classNm) 
            }, 1000) // 아이디을 지정해두어야 정지시킬 수가 있다.


        //button 클릭시
        $('button').click(function(){           
               // 다음버튼 실행
               clearInterval(autoTimer); // 자동롤링멈춰 바로 정지
               _classNm = $(this).attr('class'); //class 이름 저장 next이거나 prev
               _setTimefun($('.timer').html(), _classNm);   
               
               //버튼을 누루고 1초가 지나면 실행 다시 버튼을 클릭했을때
               // clearInterval(autoTimer); 가 실행되도록 같은 이름에 저장하게 해줘야한다.
               autoTimer =  setInterval( function(){ 
                    _setTimefun($('.timer').html(), _classNm) 
               }, 1000) // 절대 동시실행아님
        })        

        function _setTimefun(count, dir){ 
            // 타이머라는 객체에 숫자를 출력하는 함수
            // 증가, 혹은 가감 숫자출력
            // 실행할때 첫번째인자는 숫자, 두번째인자 next 이거나 아니거나 값을 받는구나
            if( dir == 'next' ) { 
                if( count < 4 )  count++; else count = 0; 
             }
            else { 
                if( count > 0 )  count--; else count = 4; 
             }            
            $('.timer').html(count);
        }
})