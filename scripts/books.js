
 function Book(name,description,img,pages,author,rating,audio,pdf){
        this.name = name;
        this.description = description; 
        this.img = img;
        this.pages = pages;
        this.author = author;
        this.rating = rating;
        this.audio = audio;
        this.pdf = pdf;
}

Book.prototype.audioType = "mp3";
Book.prototype.fileType = "pdf";



/*var Book1 = new Book("City on The Edge",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book1.jpeg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");




var Book2 = new Book("Red Cloks",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book2.jpg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");

var Book3 = new Book("City on The Edge",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book3.jpg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");

var Book4 = new Book("City on The Edge",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book4.jpg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");

var Book5 = new Book("City on The Edge",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book5.jpeg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");

var Book6 = new Book("City on The Edge",
        "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "images/book5.jpeg",
        "200",
        "Eltion Musa",
        "8.0",
        "audio/book1.mp3",
        "files/1.pdf");
*/
/*var json = [{
        "name": "City on The Edge",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book1.jpeg",
        "pages": "200",
        "author": "Eltion Musa",
        "rating": "8.0",
        "audio": "audio/book1.mp3",
        "pdf": "files/1.pdf"
    },
    {
        "name": "Red Cloks",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book2.jpg",
        "pages": "300",
        "author": "Mark GoodMan",
        "rating": "10.0",
        "audio": "audio/book1.mp3",
        "pdf": "files/1.pdf"
    },
    {
        "name": "Murders",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book3.jpg",
        "pages": "202",
        "author": "Leni",
        "rating": "9.0",
        "audio": "audio/book1.mp3",
        "pdf": "files/3.pdf"
    },
    {
        "name": "A ClockWorker",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book4.jpg",
        "pages": "103",
        "author": "Anthony Burgess",
        "rating": "7.5",
        "audio": "audio/book1.mp3"
    },
    {
        "name": "The Plague",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book5.jpg",
        "pages": "193",
        "author": "Albert Camus",
        "rating": "8.0",
        "audio": "audio/book1.mp3"
    },
    {
        "name": "Titanic",
        "description": "Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either",
        "img": "images/book5.jpg",
        "pages": "195",
        "author": "Eltion Musa"
    }
]*/


json = [];

var index = 0;

window.onload = function(){
    AddBooks();    
    drawStar();
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
        img.height = 180;
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
    $("#description").hide();
    index = element.getAttribute("data-index");
    document.getElementById("poster").src = json[index].img;
    document.getElementById("book-title").innerHTML = json[index].name;
    document.getElementById("description-text").innerHTML = json[index].description;
    document.getElementById("pages").innerHTML = json[index].pages + "    pages";
    document.getElementById("author").innerHTML = "Author: " + json[index].author;
    document.getElementById("rating").innerHTML = json[index].rating;
    $("#description").show("slide", {
        direction: "down"
    }, 1000);
}

function drawStar(){

    var canvas = document.getElementById('star');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(108 / 5, 0.0);
    ctx.lineTo(141 / 5, 70 / 5);
    ctx.lineTo(218 / 5, 78.3 / 5);
    ctx.lineTo(162 / 5, 131 / 5);
    ctx.lineTo(175 / 5, 205 / 5);
    ctx.lineTo(108 / 5, 170 / 5);
    ctx.lineTo(41.2 / 5, 205 / 5);
    ctx.lineTo(55 / 5, 131 / 5);
    ctx.lineTo(1 / 5, 78 / 5);
    ctx.lineTo(75 / 5, 68 / 5);
    ctx.lineTo(108 / 5, 0);
    ctx.closePath();
    ctx.fill();
}

function playBook() {
    var audioPlayer = document.getElementById("audio");
    var pdfLink = document.getElementById("pdf");
    document.getElementById("FullDiv").style.display = "block";
    audioPlayer.src = json[index].audio;
    audioPlayer.play();
    pdf.href = json[index].pdf;
}