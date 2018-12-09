var array = [  
   {  
      "src":"images/slideshow1.png",
      "caption":"Keep Trying! Trying new things early on in life will help you determine the path you take in the future."
   },
   {  
      "src":"images/slideshow2.png",
      "caption":"No matter what people tell you, words and ideas can change the world."
   },
   {  
      "src":"images/slideshow5.jpg",
      "caption":"People work better when they know what the goal is and why."
   }, 
   {  
      "src":"images/slideshow6.png",
      "caption":"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not."
   },
   {  
      "src":"images/slideshow7.png",
      "caption":"Everybody is a Genius. But If You Judge a Fish by Its Ability to Climb a Tree, It Will Live Its Whole Life Believing that It is Stupid."
   },
   {  
      "src":"images/5.png",
      "caption":"Brand is just a perception, and perception will match reality over time."
   }
];


 var a  = false;    
var current= 0;
var len;
var imgs;
var controls;

function SlideShowImg(array){
    for(var i = 0 ;i < array.length; i++){
        var img = document.createElement("img");
        var span = document.createElement("span");
        if(i == 0){
            span.setAttribute("class","slideshow-button slideshow-button-current");
        }else{
            span.setAttribute("class","slideshow-button");
        }
        img.src = array[i].src;
        img.setAttribute('class','img');
        var slideshowPhotos = document.getElementById("slideshowPhotos");
        var slideshowControls = document.getElementById("slideshow-controls");
        slideshowPhotos.appendChild(img);
        slideshowControls.appendChild(span);
    }
}   




function SlideImage(x){
    var to;
    var from;

    if(x == -1){
        from = "left";
        to = "right";
    }else {
        from = "right";
        to = "left";
    }


    $(imgs[current % len]).hide("slide",{direction: to},1000)
    .attr("data","");
     $(controls[current % len]).attr("class","slideshow-button");
     current+=x;
     if(current == -1) 
       current=len-1;

$(imgs[current % len]).hide("slide",{direction: to},1000)
    .attr("data","");
     $(controls[current % len]).attr("class","slideshow-button");
     current+=x;
     if(current == -1) 
       current=len-1;
     $(imgs[current % len]).show("slide",{direction: from},1000).attr("data","current");
     $(controls[current % len]).attr("class","slideshow-button slideshow-button-current");
     $(".slideshow-title").text(array[current%len].caption);
}


        