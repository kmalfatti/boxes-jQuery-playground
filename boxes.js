console.log("hello world");

$(document).ready(function(){
  alert("Ready for DOM manipulation.");
});

//2. 
// $(function(){
//   alert("Ready for DOM manipulation.");
// $('#secretBox').css('background-color', 'white').html("<h1>Secret Box!</h1>");
// $('#row1 div' ).addClass('boxType3');
// $('#row4 div:last-child').css('display', 'none');
// $('.boxType1').css('background-color', 'white');
// $('#row2 div:lt(2)').removeClass();
// $('#row1 div.children').css('background-color', 'white');
// $('.box').not('#secretBox').width('2px');
// });

//3. 
$(document).ready(function(){
$('#container').on('click', function (e) {
        console.log("pageX "+ e.pageX);
        console.log("pageY "+ e.pageY);
});

$('.boxType1').html("<a href='galvanize.com'>Galvanize</a>");
$('a').on('click', function(e) {
e.preventDefault();
alert("You can't leave!");
});


$('.box').click(function(e){
  $(this).toggleClass('puppy');
});

$('#container').on('click', function(e){
  var $tgt = $(e.target);
  if ($tgt.hasClass('box')) {
    $(this).css('background-color', 'black');
    $tgt.css('background-color', 'white');
  } else {
    $(this).css('background-color', 'limegreen');
  }
});
});

