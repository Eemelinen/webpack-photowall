# &lt;/salt&gt;

## Salt Gallery

The purpose of this exercise is not only to practice front end development, but also to use a modern tool chain for the web.

### The Domain

You should create a simple web page that is listing random images from [Unsplash](https://unsplash.com/).

Unsplash is a gallery of images that comes with a very permissive [license](https://unsplash.com/license).
One way to use the gallery is to generate random images like so `https://source.unsplash.com/random/200x200`.
However, there is a cache that will prevent you from loading several random images at once. 
There are several ways you can hack this to load different images. 
One way is to find a collection you like, and then through some JavaScript [generate random images](https://medium.com/quick-code/how-to-quickly-generate-a-random-gallery-of-images-from-an-unsplash-collection-in-javascript-4ddb2a6a4faf).
Another way is to change the sizes of the downloaded images slightly, say by one pixel.

Your task is to create a well designed web page with a set of random images. 
Try to come up with something funny that is more than just a grid of images. 

The web page must contain some (vanilla) JavaScript and some CSS.

### Requirements 
- All JavaScript and CSS should be bundled with __Webpack__. 
- The web page should consist of one HTML file. This project comes with a file called `index.html` which you may use. You are free to edit this file.
- You should use __Yarn__ as your package manager and build tool.

#### JavaScript
- All JavaScript should make use of new ES Next features and transpiled with Babel to ES5.

#### CSS
- Use a CSS precompiler. If you have tried Sass before, take the opportunity to try Stylus (or Less)
- Autoprefixer: all CSS should be vendor prefixed when needed. What browsers to support is up to you, but it should be easy to change the configuration and bundle a new version targeting another set of browsers.
