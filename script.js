window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            
         
        });
    });
});


$(function () {
    $(".btn").on("click", function (e) {
        e.preventDefault();
        $(".content").hide();
        $("#" + this.id + "div").show();
    });
});


function pianobg() {
    document.body.style.backgroundImage = "url(https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/3/236067421.jpg)";  
}


function guitarbg() {
    document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/r8dcwabJc1g/maxresdefault.jpg)";
}

function ukulelebg() {
    document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/36/9b/49/369b49625b40ed4faf1608c56fb39b7c.jpg)";
}


function flutebg() {
    document.body.style.backgroundImage = "url(https://alliancemusicacademy.com/wp-content/uploads/2014/05/Flute-Music-Paper.jpg)";
}

function accordianbg() {
    document.body.style.backgroundImage = "url(https://lh3.googleusercontent.com/xbdLbdy52r7K6BBY--TL0VLqeticvnAkbCEQH94WsAvlm_dr1GLTiFM4RIRFdv2y_brXPi35mU_ib6pWTSdWoOuuf4OYG3Y-qEiiCEuKxdNNzN-YPM8hnDA8fKqB5vXkVeoZ_MyF5IY=w2400)";
}



function drumsbg() {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)";
}

function bongosbg() {
    document.body.style.backgroundImage = "url(https://i.ebayimg.com/00/s/NTE4WDEwMjQ=/z/8WQAAOSwU4hd0ZPY/$_86.JPG)";
}

function xylbg() {
    document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/11/23/15/36/close-up-1853572__340.jpg)";
}

function flutebg() {
    document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1851514.jpg)";
}

function harpbg() {
    document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/38/52/XnTVSC.jpg)";
}

function sitarbg() {
    document.body.style.backgroundImage = "url(https://blog.britishmuseum.org/wp-content/uploads/2017/12/Sitar.jpg)";
}

function violinbg() {
    document.body.style.backgroundImage = "url(https://www.superprof.co.in/blog/wp-content/uploads/2018/02/violin-questions-for-beginners.jpg)";
}
