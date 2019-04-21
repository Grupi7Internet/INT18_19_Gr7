
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="utf-8">
    <style type="text/css">
    a {
    text-decoration-line: none;

    }

    a:hover {
    color: #0070c9;
    transform: scale(1.01);
    transition: all .3s ease-in-out;
    }
    </style>
    <link rel="stylesheet" type="text/css" href="styles/header.css">
    <link rel="stylesheet" type="text/css" href="styles/main.css">
    <link rel="stylesheet" type="text/css" href="styles/footer.css">
    <script src="scripts/jquery.min.js"></script>
    <script src="scripts/jquery-ui.min.js"></script>
    <script src="scripts/formValidator.js"></script>
    <script src="scripts/color.js"></script>
    <script src="scripts/slideshow.js"></script>
    <script src="scripts/main.js"></script>

    <script type="text/javascript">

    function dropdown(){
    $("#dropdown").slideToggle();
    }


    </script>

    <title>Back To School</title>
    </head>
    <title>Back To School</title>
    </head>

    <body>
    <title>Back To School</title>
    </head>
    <title>Back To School</title>
    </head>
    <div style="width: 1200px; margin: 0 auto;">
    <div id='slideshow'>
    <div id="slideshowPhotos">
    </div>
    <div class="slideshow-title">Keep Trying! Trying new things early on in life will help you determine the path you take in the future.
    </div>
    <div id="slideshow-controls">

    </div>
    <div style="left: 20px;transform: rotateY(180deg);" class="slideshow-arrow" onclick="SlideImage(1)">
    <img src="images/arrow.png" width="100%">
    </div>

    <div style="right: 20px;" class="slideshow-arrow" onclick="SlideImage(-1)">
    <img src="images/arrow.png" width="100%">
    </div>
    </div>    

    <script type="text/javascript">

    </script>

    <div style="margin-top: 70px;opacity: 0;" class="clearfix" id="part1">
    <article  class="article1">
    <img width="64" alt="foto" title="Foto" height="64" src="images/HealthyHabits.png">
    <h3>Healthy Habits</h3>
    <p>Make a plan,then make healthy habits then healthy habits make you.</p>
    </article>
    <article class="article1">
    <img width="64" alt="foto" title="Foto" height="64" src="images/Performance.png">
    <h3>Performance</h3>
    <p>The heights of excellence can only be achieve by those thriving for it. </p>
    </article>
    <article class="article1">
    <img width="64" alt="foto" title="Foto" height="64" src="images/Achievment.png">
    <h3>Achievement</h3>
    <p>A dream becomes a goal when action is taken toward its achievemnet.</p>
    </article>
    <article class="article1">
    <img width="64" alt="foto" title="Foto" height="64" src="images/family.png">
    <h3>Family</h3>
    <p>A tree can not grow without roots to support it, so hold on to it.</p>

    </article>
    </div>


    <div id="quote" style="font-size: 20px; text-align: center; margin:40px 0px;font-family: Roboto;"><b>"Study hard what interests you the most in the most undisciplined irreverent and orginal manner possible."</b></div>

    <div class="clearfix" style="margin-top: 70px;opacity: 0;" id="part2">
    <article class="article3">
    <h3>Success </h3>
    <p>usually comes to those who are too busy to be looking for it.</p>
    </article>
    <article class="article2">
    <img width="210" height="160" alt="foto" title="Foto"  src="images/Resourses.png">
    <p>A proper study plan and dedication always beats any challenge.</p>
    </article>
    <article class="article2">
    <img width="210" height="160" alt="foto" title="Foto"  src="images/sun.gif">
    <p>Keep your face to the sunshine and you cannot see a shadow. </p>
    </article>
    <article class="article2">
    <img width="210" height="160" alt="foto" title="Foto"  src="images/teacher.png">
    <p>Discipline is the bridge between goals and accomplishment.</p>
    </article>

    </div>

    </div>
    </div>

    <div class="goToTop">
    <a onclick="OpTopPressed();" href="#top">
    <i class="arrow up"></i>
    </a> 
    </div>
    <footer>
        <div class="footer-col">
            <div>
                <h3>ABOUT OUR SCHOOL</h3>
                <p>The relative degree of education evloves in many ways, that is why we try to grow beside the trend of tech.</p>
                <a href="#">Read More »</a>
            </div>
            <div>
                <h3>FROM THE BLOG</h3>
                <h3>Post title</h3>
                <p>Friday, 6th April 2000</p>
                <p>When is the new version of the game coming update ?...</p>
                <a href="#">Read More »</a>
            </div>
        </div>
        <div class="footer-col">
            <h3 style="text-align: left;">LINKS</h3>
            <ul>
                <li> »  <a href="https://www.coursera.org/" target="_blank">Coursera</a></li>
                <li> »  <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a></li>
                <li> »  <a href="https://www.edx.org/" target="_blank">Edx</a></li>
                <li> »  <a href="https://www.codingame.com/start" target="_blank">Coding Game</a></li>
                <li> »  <a href="https://code.org/learn" target="_blank">Code</a></li>
                <li> »  <a href="https://www.tynker.com/" target="_blank">Tinker</a></li>
                <li> »  <a href="https://www.e-learningforkids.org#page" target="_blank">e-learningforkids</a></li>
               
            </ul>
        </div>
        <div class="footer-col">
            <div>
                <h3>NEWSLETTER</h3>
                <p>Join us and recieve productive newsletters.</p>
                <form action="#" method="POST" id="footerForm" onsubmit="return formValidator1()">
                    <input type="text" name="name" placeholder="Name" /> <br />
                    <input type="email" name="name" placeholder="Email" /> <br />
                    <ol class="errors">
                        
                    </ol>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
            <div style="margin-top: 10px;">
            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
            <div style="display: inline-block;vertical-align: middle;"><a href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @TwitterDev</a></div>
            </div>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <address>
                <h3 style="text-decoration: underline overline; ">CONTACT US</h3>
                <p>Tel: xxxxx xxxxxxxxxx</p>
                <p><a href="mailto:me@example.com">Email: contact@mydomain.com</a></p>
            </address>
        </div>
        <div class="footer-end clearfix">
            <p class="left">Copyright &copy; <?php echo date('Y'); ?> - All Rights Reserved</p>
            <p class="right">Time on Page <span id="TimeOnPage" style="color: white;"></span> Website by <abbr title="GRUPI7"><mark>G7</mark></abbr></p>
        </div>
    </footer>
    <div style="position: fixed;left: 20px;bottom: 40px;width: 40px;height: 40px;background-color: black; padding: 10px;border-radius: 50px;" onclick="changeColors();">
    <img id="colorChanger" src="images/sun.png" width="100%
    </html>