/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
'styles/dependencies/bootstrap.min.css',
  'styles/**/*.css',
  'styles/custom.css',
  '!styles/locals/**/*.scss'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/modernizr.js',
  'js/dependencies/sails.io.js',
  'js/dependencies/jquery.1.12.3.js',
  'js/dependencies/jquery-ui.min.js',
  'js/dependencies/**/*.js',
  'js/jquery.easing.1.3.js',
  'js/jquery.appear.js',
  'revolution/jquery.themepunch.tools.min.js',
  'revolution/jquery.themepunch.revolution.min.js',
  'js/jquery.countTo.js',
  'js/jquery.bxslider.min.js',
  'js/jquery.cubeportfolio.min.js',
  'js/cubeportfolio.main.js',
  'js/jquery.magnific-popup.min.js',
  'js/masterslider.min.js',
  'js/map-script.min.js',
  'js/velocity.min.js',
  'js/jquery.animsition.js',
  'js/materialmenu.js',
  'js/quform/plugins.js',
  'js/quform/scripts.js',
  'js/revolution/*.js',
  'js/revolution/extensions/revolution.extension.video.min.js',
  'js/revolution/extensions/revolution.extension.slideanims.min.js',
  'js/revolution/extensions/revolution.extension.actions.min.js',
  'js/revolution/extensions/revolution.extension.layeranimation.min.js',
  'js/revolution/extensions/revolution.extension.navigation.min.js',
  'js/revolution/extensions/revolution.extension.parallax.min.js',
  'js/revolution/extensions/**/*.js',
  'js/retina.min.js',
  'js/custom.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js',
	'!js/local/*.js',
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];







// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  return require('path').join('assets/',tplPath);
});
