var part1showed = false;
var part2showed = false;
var windowsH = $(window).height();

$(window).scroll(function() {
    var part1Top = $('#part1').offset().top,
        part1Height = $('#part1').outerHeight(),
        scroll = $(this).scrollTop();
    if (scroll > (part1Top + part1Height - windowsH) && !part1showed) {
        part1showed = true;
        $('#part1').fadeTo(0, 1);
        $('#part1').hide();
        $('#part1').show("slide", {
            direction: "down"
        }, 500);
    } else if (scroll > (part1Top + part1Height - windowsH) && !part2showed) {
        part2showed = true;
        $('#part2').fadeTo(1000, 1);
    }
});
