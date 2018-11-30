jQuery(document).ready(function($){
// new WOW().init();
if ($("#section1") != null){
$('html, body').animate({
  scrollTop: $("#section1").offset().top
}, 1000);
 // console.log('madeit');
};
});

$('body').scrollspy({ target: '#internalnav' });
$('ul.nav li a:not(.sidenavlink)').bind('click', function(e) {
  //e.preventDefault();
  // console.log($(this));
  // console.log($(this.hash));
  // console.log($(this).hash);
  $('html,body').animate({scrollTop: 0});
});
