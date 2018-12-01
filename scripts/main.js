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


var w;

window.onload = function(){
  colorChanger = document.getElementById("colorChanger");
  var hour = new Date().getHours();
  if(hour >18 || hour < 6){

    night = false;
    changeColors(); 
    
  }


    SlideShowImg(array);
    imgs = $('.img');
    controls = $('.slideshow-button');
    len = imgs.length;
    setInterval(function() {
        if (a == false) { //vetem nese kursori nuk eshte mbi foto
            SlideImage(1);
        }
    }, 5000);


    $("#slideshow").mouseenter(function() {
        a = true;
    }).mouseleave(function() {
        a = false;
    });


    $(".slideshow-button").on("click", function() {
        if (!$(this).hasClass("slideshow-button-current")) {
            var index = $(".slideshow-button").index($(this));
            current = index;
            $("[data='current']").hide("slide", {
                    direction: "left"
                }, 1000)
                .attr("data", "");
            $(imgs[index]).show("slide", {
                direction: "right"
            }, 1000).attr("data", "current");
            $(".slideshow-button-current").attr("class", "slideshow-button");
            $(this).attr("class", "slideshow-button slideshow-button-current");
        }
    });


  if(localStorage.getItem("LastTime")!= null){
      document.getElementById("LastVisited").innerHTML = "Last Visit: " + localStorage.getItem("LastTime");
  }

  startWorker();


}

function OpTopPressed(){
  $('html, body').animate({
        scrollTop: $("#top").offset().top
      }, 800, function(){
        window.location.hash = "#top";
      });
}


window.onbeforeunload = function(){
   stopWorker();
   var date = (new Date()).toString().substr(0, 15);
   localStorage.setItem("LastTime",date);
}


