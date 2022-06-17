let an_media, an_overlay, an_over
const w = window.innerWidth * 1.5;
const h = window.innerHeight * 1.5;

function fadeOutEffect(target) {
    let fadeEffect = setInterval(function () {
        if (target.style.opacity >= 0) {
            target.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            target.remove();
        }
    }, 1);
};

function anamorph(an_media, an_overlay, an_backup) {

    const source = 'https://www.youtube.com/iframe_api';
    let script = document.createElement('script');
    let prior = document.getElementsByTagName('script')[0];
    script.async = 1;

    script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

        }
    };

    script.src = source;
    prior.parentNode.insertBefore(script, prior);

    let isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    let an_media_url = an_media.split('.');
    let an_media_id = an_media.split('/');
    let an_length = an_media_url.length - 1;
    let an_yt_length = an_media_id.length - 1;
    document.body.style.margin = '0';
    document.body.background = '#000';
    const an_style = "z-index: -999; position: fixed; top: 50%; left: 50%; min-width: 100%; min-height: 100%; transform: translate(-50%, -50%); width=auto; height=auto";
    let an_wrapper = document.createElement('div');
    an_wrapper.id = 'an_wrapper';
    an_wrapper.style.zIndex = '-997';
    document.body.prepend(an_wrapper);

    if (an_overlay) {
        an_over = document.createElement('div');
        an_over.id = 'an_over';
        an_over.style.opacity = '1';
        an_over.style.zIndex = '-998';
        an_over.style.position = 'fixed';
        an_over.style.top = '0';
        an_over.style.backgroundColor = '#000';
        an_over.style.width = '100%';
        an_over.style.height = '100%';
        fadeOutEffect(an_over);
        an_over.addEventListener('loadeddata', fadeOutEffect(an_over));
        an_wrapper.appendChild(an_over);
        if (an_overlay == 'bw') {
            an_wrapper.style.mixBlendMode = 'saturation';
        } else if (an_overlay > 0) {
            an_wrapper.style.opacity = an_overlay;
        }
    }

    if (an_media.indexOf('youtube.com' || 'youtu.be') !== -1 && isMobile == false) {
        let an_youtube = document.createElement('div');
        an_youtube.id = 'an_ytplayer';
        an_youtube.width = w;
        an_youtube.height = h;
        an_youtube.setAttribute('style', an_style);
        an_wrapper.appendChild(an_youtube);
        window.onYouTubePlayerAPIReady = function () {
            let player = new YT.Player('an_ytplayer', {
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
                    onReady: function (e) {
                        e.target.mute()
                    },
                    onStateChange: function (e) {
                        if (e.data === YT.PlayerState.ENDED) {
                            player.playVideo();
                        }
                        if (e.data === YT.PlayerState.PLAYING) {
                            fadeOutEffect(an_over)
                        }
                    }
                }
            })
        }
    } else {

        if (an_media_url[an_length] == 'mp4' && isMobile == false) {
            let an_video = document.createElement('video');
            an_video.setAttribute('style', an_style);
            an_video.id = 'an_video';
            an_video.muted = true;
            an_video.autoplay = true;
            an_video.loop = true;
            let source = document.createElement('source');
            source.src = an_media;
            source.setAttribute('type', 'video/mp4');
            an_over.addEventListener('playing', fadeOutEffect(an_over));
            an_video.appendChild(source);
            an_wrapper.appendChild(an_video);
        } else {
            let an_img = document.createElement('div');
            an_img.setAttribute('style', an_style);
            let img = document.createElement('img');
            img.setAttribute('style', an_style);
            if (an_media_url[an_length] == 'jpg' | 'gif' | 'png') {
                an_img.id = 'an_media';
                img.src = an_media;
            } else if (an_media_url[an_length] == 'mp4' || an_media.indexOf('youtube.com' || 'youtu.be') !== -1 && isMobile == true) {
                if (!an_backup) {
                    console.error("You did not specify a backup image for mobile devices and tablets.");
                    return;
                }
                an_img.id = 'an_backup';
                img.src = an_backup;
            }
            an_img.appendChild(img);
            an_wrapper.appendChild(an_img);
        }
    }
}
