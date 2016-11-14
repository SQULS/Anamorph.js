# Anamorph.js
Small plugin to simplify the inclusion of full screen responsive images and video on your website.
## Getting Started
You will require jQuery either installed locally or referenced remotely.
For example:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```
### Usage
Include a reference to Anamorph.js in your index page.
```
<script src="anamorph.js"></script>
```
```
<script src="anamorph.min.js"></script>
```
Call the Anamorph function including the path to your image or video, and an opacity level for the overlay (from 0 - 1).
For example:
```
anamorph("test.jpg",0.5)
```
File formats supported are .jpg, .gif & .png for images and .mp4 for video.
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
