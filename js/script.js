

$('.arrows').click(function(event) {
    var n = $('header').height();
    $('html, body').animate({ scrollTop: n }, 1000);
});

var w = $('#content h1').width();
var w2 = $('.title').width();
var yekun = ((w - w2) / 2) - 20;
$(".title hr:first-child,.title hr:last-child").css('width', yekun);