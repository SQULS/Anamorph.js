var an_media, an_overlay;
var w = $(window).width() * 1.5;
var h = $(window).height() * 1.5;
function anamorph(an_media, an_overlay) {
    $.getScript('https://www.youtube.com/iframe_api');
    var an_media_url = an_media.split('.');
    var an_media_id = an_media.split('/');
    var an_length = an_media_url.length-1;
    var an_yt_length = an_media_id.length-1;
    $(document.body).css({"margin": "0", "background": "none"});
    var an_style = "position: fixed; top: 50%; left: 50%; min-width: 100%; min-height: 100%; transform: translate(-50%, -50%); width=auto; height=auto";
    var an_wrapper = "<div id='an_wrapper' style='z-index: -997;'></div>";
    var an_over = "<div id='an_overlay' style='z-index: -998; position: fixed; top: 0; background-color: #000000; width: 100%; height: 100%;'></div>";
    var an_video = "<video id='an_video' style='z-index: -999; "+an_style+"' autoplay loop muted><source src="+an_media+" type='video/mp4'></video>";
    var an_img = "<div id='an_img' style='z-index: -999; "+an_style+"'><img style='"+an_style+"' src='"+an_media+"'></div>";
    var an_youtube = "<div id='an_ytplayer' width='"+w+"' height='"+h+"' style='z-index: -999; "+an_style+"'></div>";
    $(an_wrapper).prependTo('body');
    if (an_overlay == 'bw') {
    $(an_over).appendTo('#an_wrapper').css('mix-blend-mode','saturation');
    } else if (an_overlay > 0) {
    $(an_over).appendTo('#an_wrapper').css('opacity',an_overlay);
    }
    if (an_media.indexOf('youtube') !== -1) {
     $(an_youtube).appendTo('#an_wrapper');
        window.onYouTubePlayerAPIReady = function() {
            var player = new YT.Player('an_ytplayer', {
                height: h,
                width: w,
                videoId: an_media_id[an_yt_length],
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    loop: 1,
                    fs: 0,
                    cc_load_policty: 0,
                    iv_load_policy: 3,
                    autohide: 0,
                    rel: 0,
                    disablekb: 1,
                    enablejsapi: 1,
                    fs: 0,
                    playsinline: 0
                },
                events: {
                    onReady: function(e) {
                            e.target.mute()
                            e.target.loop()
                    },
                    onStateChange: 
                            function(e){
                                if (e.data === YT.PlayerState.ENDED) {
                                player.playVideo(); 
                            }
    }
                }
        })
        }
    } else {
    if (an_media_url[an_length] == 'jpg' | 'gif' | 'png') {
        $(an_img).appendTo('#an_wrapper');
    } else if (an_media_url[an_length] == 'mp4') {
        $(an_video).appendTo('#an_wrapper');
    }
    }
}
