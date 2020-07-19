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
    document.body.style.backgroundImage = "url(https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg)";
}


function guitarbg() {
    document.body.style.backgroundImage = "url(https://www.escapehimalaya.com/wp-content/uploads/2017/07/mountain-1209497_1920-1280x600.jpg)";
}

