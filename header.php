

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>
<header>
    <div id="top" class="">
        <div class="socialNetworks">
            <a target="_blank" href="https://www.linkedin.com/">
                <img width="30" title="Linkedin" alt="linku per linkedin" src="images/linkedin60x60.png"></a>
            <a target="_blank" href="https://twitter.com/">
                <img width="30" title="Twitter" alt="linku per twitter" src="images/twitter60x60.png"></a>
            <a target="_blank" href="https://plus.google.com/discover">
                <img width="30" title="Google PLus" alt="linku per google plus" src="images/googleplus60x60.png"></a>
            <a target="_blank" href="https://www.pinterest.com/">
                <img width="30" title="Pinterest" alt="linku per pinterest" src="images/pinterest60x60.png"></a>
            <a target="_blank" href="">
                <img width="30" alt="linku per newsfeed" title="RSS Feed" src="images/newsfeed60x60.png"></a>
        </div>
        <div class="onToplinks">
            <p id="LastVisited" style="text-align: right;color: #929292;margin-top: 7px; font-size: 10pt;"></p>

        </div>
    </div>
    <div id="logoContainer" class="">
        <a class="time4shcool" href="index.php">Time 4 School</a>
        <form id="search" action="#" method="POST">
           <input type="search" name="search" autocomplete="off" onkeyup="ELTI(this);" size="20" placeholder="search our website..">
           <script>
                function ELTI(input){
                    var keyword = input.value;
                    $("#SearchContent").find("ul").empty();
                    if(keyword.length > 2){
                        $("#SearchContent").find("ul").load("search.php?k="+encodeURI(keyword));
                    }

                }
           </script>
           <input type="submit" value="Search">
           <div id="SearchContent">
               <ul>

               </ul>
           </div>
        </form>
    </div>
    
      </header>