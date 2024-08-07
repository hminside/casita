$(function(){


// let t = 0;

// function slide(){
//     if (t<2) {
//         t++;
//     }
//     else {
//         t=0;
//     }
//     $(".main_visual li").fadeOut("slow");
//     $(".main_visual li").eq(t).fadeIn("slow");
// };

// setInterval(slide,3500);

$(".main_visual > li:gt(0)").hide();

setInterval(function() {
  $('.main_visual > li:first')
    .fadeOut("slow")
    .next()
    .fadeIn("slow")
    .end()
    .appendTo('.main_visual');
},  2500);

});
