var plf = window.navigator.platform;
if (plf == 'iPhone' || plf == 'iPad' || plf == 'iPod') {
    var btn_play = document.createElement('button');
    var btn_txt = document.createTextNode('Play || Pause');
    btn_play.setAttribute('class', 'btn play');
    btn_play.setAttribute('onclick', 'video_clicked()');
    btn_play.appendChild(btn_txt);
    document.body.appendChild(btn_play);
}

function video_clicked() {
    var vdo = $('video'),
        src = vdo.src,
        title = vdo.title,
        intro = '/assets/video/intro.mp4',
        isPlayed = vdo.paused;

    if (vdo.currentTime > 0) {
        if (isPlayed == true) {
            vdo.play();
        } else {
            vdo.pause();
        }
        return "";
    } else {

        var btn = $('button.btn.play');

        /* replacing intro ads */
        vdo.title = 'Intro Ads';
        vdo.src = intro;
        vdo.play();
    }

    function $(x) {
        return document.querySelector(x);
    }
};