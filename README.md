# Anamorph.js
JavaScript plugin to simplify the inclusion of full screen responsive images and video on your website.

## Usage

Include a reference to Anamorph.js in your index page.
```
<script src="anamorph.js"></script>
```
Or the minimised verion.
```
<script src="anamorph.min.js"></script>
```
Anamorph is use be calling the ```anamorph()``` method and passing an object containing the following properties.

* _media_: string, Url for image or video, or pass a YouTube url in ```https://www.youtube.com/embed/[VIDEO_ID]``` format
* _overlay_: float/string (from 0 - 1), An opacity level for the overlay or 'bw' for black & white filter
* _random_: boolean, If set start point will be randomised
* _start_: (required if random is true) int, Start point in seconds
* _end_: (required if random is true) int, End point in seconds
* _backup_: string, Url for back up image

For example:

```
let properties = {
    media: 'https://www.youtube.com/embed/hpRQo0yD-FU',
    overlay: 0.5,
    random: true,
    start: 100,
    end: 300,
    backup: 'cloud.jpg'
}
        
anamorph(properties)
```
File formats supported are ._jpg_, ._gif_ & ._png_ for images and ._mp4_ for video.

As some mobile devices and tablets do not allow autoplaying of video it is always prudent to pass a backup image. Anamorph will detect what type of device you are using.

## License
This project is Unlicensed - see the [LICENSE](LICENSE) file for details.
