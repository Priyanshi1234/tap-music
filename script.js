window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "lightcoral",
        "lightgrey",
        "lightsalmon",
        "lightgreen",
        "lightpink",
        "mediumorchid"
    ];





    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });


    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 2s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };



});

$(function () {
    $(".btn").on("click", function (e) {
        e.preventDefault();
        $(".content").hide();
        $("#" + this.id + "div").show();
    });
});


function pianobg() {
    document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp3009570.jpg)";
}


function guitarbg() {
    document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/r8dcwabJc1g/maxresdefault.jpg)";
}

function flutebg() {
    document.body.style.backgroundImage = "url(https://alliancemusicacademy.com/wp-content/uploads/2014/05/Flute-Music-Paper.jpg)";
}


function drumsbg() {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)";
}

function bongosbg() {
    document.body.style.backgroundImage = "url(https://i.ebayimg.com/00/s/NTE4WDEwMjQ=/z/8WQAAOSwU4hd0ZPY/$_86.JPG)";
}

function tunerbg() {
    document.body.style.backgroundImage = "url(https://www.slashdigit.com/wp-content/uploads/2018/09/Chromatic-Guitar-Tuner.png)";
}

function xylbg() {
    document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/11/23/15/36/close-up-1853572__340.jpg)";
}

function cpbg() {
    document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp3009570.jpg)";
}

