
jQuery(document).ready(function($){
//enables Wow JS library
new WOW().init();

//creates typewriter effect on home page
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
