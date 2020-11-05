var cnt = 1;
function start_water_fall()
{
    var tap = document.getElementById("tap_off");
    if (cnt % 2 != 0) {
        var node = document.getElementById('water_fall');
        node.innerHTML = "";
        tap.src = "tap_on.JPG";
        var video = document.createElement('video');
        video.src = "water_falling.mp4";
        document.getElementById('water_fall').appendChild(video);
        video.style.width = "900px";
        video.style.height = "480px";
        video.style.objectFit = "cover";
        video.playbackRate = ".6";
        video.play();
        cnt++;
    }
    else {
        tap.src = "tap_off.JPG";
        var node = document.getElementById('water_fall');
        node.innerHTML = "";
        var img = document.createElement('img');
        img.src = "water_tap.jpg";
        document.getElementById('water_fall').appendChild(img);
        img.style.width = "900px";
        img.style.height = "480px";
        img.style.objectFit = "cover";
        cnt++;
    }
}