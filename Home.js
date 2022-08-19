$(document).ready(function() {
    $('#btn-next').click(function(event) {
       var slide_sau = $('.active').next();
       var vi_tri_hien_tai = $('.active_nut').index()+1;
       console.log(vi_tri_hien_tai);
       if(slide_sau.length!=0){
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
          $('.nut-slide ul li').removeClass('active_nut');
          $('.nut-slide ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_nut');
       }else{
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
          $('.nut-slide ul li').removeClass('active_nut');
          $('.nut-slide ul li:nth-child(1)').addClass('active_nut');
       }
    });
 });

 $(document).ready(function() {
    $('#btn-prev').click(function(event) {
       var slide_truoc = $('.active').prev();
       var vi_tri_hien_tai = $('.active_nut').index()+1;
       console.log(vi_tri_hien_tai);
       if(slide_truoc.length!=0){
          $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
          });
          slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
          });
          $('.nut-slide ul li').removeClass('active_nut');
          $('.nut-slide ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active_nut');
       }else{
          $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
          });
          $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
          });
          $('.nut-slide ul li').removeClass('active_nut');
          $('.nut-slide ul li:nth-child(last-child)').addClass('active_nut');
      }
   });
});


       

var autoLoad= setInterval(function(){
   $('#btn-next').trigger('click');
},3000);
 

