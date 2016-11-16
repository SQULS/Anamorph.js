var an_media, an_overlay;
function anamorph(an_media, an_overlay) {
    var an_media_url = an_media.split('.');
    var an_media_id = an_media.split('/');
    var an_length = an_media.split('.').length-1;
    $(document.body).css({"margin": "0", "background": "none"});
    var an_style = "position: fixed; top: 50%; left: 50%; min-width: 100%; min-height: 100%; transform: translate(-50%, -50%); width=auto; height=auto";
    var an_wrapper = "<div id='an_wrapper' style='z-index: -997;'></div>";
    var an_over = "<div id='an_overlay' style='z-index: -998; position: fixed; top: 0; background-color: #000000; width: 100%; height: 100%; opacity:" + an_overlay +"'+></div>";
    var an_bw = "<div id='an_overlay' style='z-index: -998; position: fixed; top: 0; background-color: #000000; width: 100%; height: 100%; mix-blend-mode: saturation;'></div>";
    var an_video = "<video id='an_video' style='z-index: -999; "+an_style+"' autoplay loop muted><source src="+an_media+" type='video/mp4'></video>";
    var an_img = "<div id='an_img' style='z-index: -999; "+an_style+"'><img style='"+an_style+"' src='"+an_media+"'</div>";
    var an_youtube = "<iframe id='an_youtube' frameborder='0' width='1000' height='10000' src='"+an_media+"?autohide=1&;autoplay=1&;controls=0&;loop=1&;wmode=transparent&;playlist="+an_media_id[4]+"&;modestbranding=1&;iv_load_policy=3&;disablekb=1&;playsinline=1&;rel=0&;showinfo=0;' style='z-index:-999; "+an_style+"'></iframe>";
    $(an_wrapper).prependTo('body');
    if (an_overlay == 'bw') {
    $(an_bw).appendTo('#an_wrapper');
    } else if (an_overlay > 0) {
    $(an_over).appendTo('#an_wrapper');
    }
    if (an_media.indexOf('youtube') !== -1) {
     $(an_youtube).appendTo('#an_wrapper');
    } else {
    if (an_media_url[an_length] == 'jpg' | 'gif' | 'png') {
        $(an_img).appendTo('#an_wrapper');
    } else if (an_media_url[an_length] == 'mp4') {
        $(an_video).appendTo('#an_wrapper');
    }
    }
}
