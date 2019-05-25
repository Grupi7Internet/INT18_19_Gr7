
 function Video(name,description,img,minutes,author,rating,video){
        this.name = name;
        this.description = description; 
        this.img = img;
        this.minutes = minutes;
        this.author = author;
        this.rating = rating;
        this.video = video;
}

Video.prototype.audioType = "mp4";


/*var Video1 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/js.jpeg",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/1.mp4");


Video1.ToStr = function(){
    return this.name +" "+this.author;
}

var Video1 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/php.png",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/2.mp4");

var Video2 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/js.jpeg",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/3.mp4");


var Video3 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/html5.png",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/4.mp4");

var Video4 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/css.png",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/1.mp4");

var Video5 = new Video("Fiek",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/7.png",
        "200",
        "Eltion Musa",
        "8.0",
        "videos/5.mp4");*/


json = [];

var index = 0;

window.onload = function(){
    AddBooks();    
    //drawStar();
}

function AddBooks() {

for (var i = 0; i < json.length; i++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        var item = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("data-index", i);
        img.addEventListener("click", function() {
            changeBook(this);
        });
        img.src = json[i].img;
        img.width = 130;
        img.style.verticalAlign = "middle";
        item.setAttribute("class", "grid-item1");
        item.appendChild(img);
        li.appendChild(item);
        ul.appendChild(li);
        if (i == 0) {
            changeBook(img);
        }

    }
}

function closeFullDiv() {
    document.getElementById("FullDiv").style.display = "none";
    document.getElementById("audio").pause();
}


function changeBook(element) {
    //alert(json[index].video);
    index = element.getAttribute("data-index");

    document.getElementById("video").src = json[index].video;
    document.getElementsByTagName("h2")[0].innerHTML = json[index].name;
}
