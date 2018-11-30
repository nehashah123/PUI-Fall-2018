// var animationResearch=false;
// var animationBuild=false;
// var animationRunning = false;
//
//
//
//   $(window).scroll(function() {
//     if ($('#build').offset() != null) {
//    var hT = $('#build').offset().top,
//        hH = $('#build').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && animationBuild==false){
//       $('.leading').addClass('letters')
//       if (animationRunning == false){
//       animateTitles()
//       animationRunning = true
//       }
//       animationBuild=true;
//       if (animationBuild == true){
//         $('.leading').removeClass('letters')
//       $('.leading').removeClass('letter')}
//
//       console.log('madeit-build')
//       animationRunning = false
//       console.log(animationBuild)
//    } /*else {
//       $('.leading').removeClass('letters')
//       animateTitles()
//       console.log('not there')
//    }*/
//   }});
//
//   $(window).scroll(function() {
// if ($('#research').offset() != null) {
//    var hT = $('#research').offset().top,
//        hH = $('#research').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && animationResearch==false){
//       $('.leading1').addClass('letters1')
//       if (animationRunning == false){
//       animateTitles1()
//       animationRunning = true
//       }
//       animationResearch=true;
//       if (animationResearch == true){
//         $('.leading1').removeClass('letters1')}
//       console.log('madeit - research')
//       animationRunning = false
//       console.log(animationResearch)
//    } /*else {
//       $('.leading').removeClass('letters')
//       animateTitles()
//       console.log('not there')
//    }*/
// }});
//
//
//
//
// function animateTitles() {
//     // Wrap every letter in a span
//     $('.ml10 .letters').each(function(){
//     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
//     });
//
//     anime.timeline({loop: false})
//     .add({
//       targets: '.ml10 .letter',
//       rotateY: [-90, 0],
//       duration: 1000,
//       delay: function(el, i) {
//         return 90 * i;
//       }
//     });
//   };
//
//   function animateTitles1() {
//       // Wrap every letter in a span
//       $('.ml10 .letters1').each(function(){
//       $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter1'>$&</span>"));
//       });
//
//       anime.timeline({loop: false})
//       .add({
//         targets: '.ml10 .letter1',
//         rotateY: [-90, 0],
//         duration: 1000,
//         delay: function(el, i) {
//           return 90 * i;
//         }
//       });
//     };

jQuery(document).ready(function($){
new WOW().init();
if ($("#firstline") != null){
typeWriter("#firstline","true",100);
}
});

// Wrap every letter in a span
$('.ml16').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 3000,
    delay: function(el, i) {
      return 30 * i;
    }
  });
