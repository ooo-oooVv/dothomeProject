$(document).ready(function(){
   $('a.scrollPage').on('click',function(e){
     e.preventDefault(); //책갈피기능 막기
   //   $('#gnb .navia').removeClass('on') // 클릭하자마자 활성화 
   //   $(this).addClass('on') // 클릭하자마자 활성화 
     $('body, html').animate({ 
        scrollTop : $($(this).attr('href')).offset().top
        }, 400, "linear", () => { // 화살표함수 ES2015+
         if( $(this).hasClass('navia')){ // navia 클래스를 가지고 있다면
             $('#gnb .navia').removeClass('on') // 모든 네비게이션 스타일 빼고
             $(this).addClass('on') // 지금 클릭한 너만 스타일넣어
         }
     })
   }) //// a.scrollPage click

   $(window).on('scroll' , function(){

      var scrollPos = $(window).scrollTop();      
      $('.section').each(function(){ 
         if( scrollPos > $(this).offset().top - 100 ){ 
            $('#gnb .navia').removeClass('on')
            $('a[href="#'+$(this).attr('id')+'"]').addClass('on')           
         }
      })
       
      if( scrollPos > 0){
         $('#hd').addClass('on')
      }else{
         $('#hd').removeClass('on')
      }


   })

   var num = 0;
   //2번
   var myroll = setInterval(function(){
      num++;
      num %= $('.culture_item button').length;
      myrollingfun(num); // 실행식에서는 진짜 값을 넣어줘야한다.
   }, 3000)
   //3번
   $('.culture_item button').on('click', function(){
      clearInterval(myroll); // 자동롤링 멈춰
      num = $(this).parent().index()
      myrollingfun(num) 
      //클릭한 버튼의 부모 .culture_item의 순번 0 ,1, 2  
      // 3초내에 클릭을 안하면 자동롤링이 다시 실행됨
      // var 를 삽입하면 myroll이 3초마다 생성되는거라 
      // clearInterval(myroll); 딱 하나만 삭제하는거라 움직임이 이상해짐
      myroll = setInterval(function(){
         num++;
         num %= $('.culture_item button').length;
         myrollingfun(num); // 실행식에서는 진짜 값을 넣어줘야한다.
         
      }, 3000)       
   })
   //1번 선언적함수 - 제일 먼저 번역해서... 위치상관없음
   function myrollingfun(x){ // 선택자와 이벤트로 독립
      $('.culture_item').removeClass('active');
      $('.culture_item button').eq(x).parent().addClass('active');
   }   

})
///////////////////////////// 신의한수 : 클래스삽입해서 편하게 짜다~

// $(this).attr('href')  -> #aboutus  -> $('#aboutus') 
// $(this).attr('id')  -> aboutus -> $('[href="#aboutus"]')