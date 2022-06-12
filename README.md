# Anamorph.js
Small JavaScript plugin to simplify the inclusion of full screen responsive images and video on your website.
## Getting Started
You will require jQuery either installed locally or referenced remotely.
For example:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```
## Usage
Include a reference to Anamorph.js in your index page.
```
<script src="anamorph.js"></script>
```
Or the minimised verion.
```
<script src="anamorph.min.js"></script>
```
Call the Anamorph function including the path to your image or video, and an opacity level for the overlay (from 0 - 1). Alternatively, pass 'bw' in the second parameter to turn the background black and white.
For example:
```
anamorph("test.jpg",'0.5')
```
File formats supported are .jpg, .gif & .png for images and .mp4 for video.
To use a video from YouTube pass the embeddable url in the first parameter.
```
anamorph("https://www.youtube.com/embed/[VIDEO_ID]",'bw')
```
As some mobile devices and tablets do not allow autoplaying of video you can pass a back up still image to Anamorph as a fallback. Anamoprh will detect what type of device you are using. Just include the path to this image as a third parameter when calling the function. 
```
anamorph("test.mp4",0.5,"test.jpg");
```
## License
This project is unlicensed under The Unlicense - see the [LICENSE](LICENSE) file for details
