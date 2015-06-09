# Project Web X
A Javascript application boilerplate for developing websites and JS applications. Its packaged with some useful libraries and frameworks to help speed up the initial development of a project.


##Whats included?
* Bootstrap 3
* Compass SASS
* BrowserSync
* Respond.js
* HTML5shiv

##Install
To get started simply run the following from your terminal:

	$ npm install

Then run

	$ gulp

The gulp task manager will then start watching your project for changes and compile the output to the **www** folder (which is the application root). BrowserSync will also be started up serving the application on http://localhost:3000.

##Application
The source for your application will sit in the **app** folder. Here you can develop any type of project you like, be it angular or just plain old Javascript. All the modules that you add here will be compiled into a single minified .js file that will output to your application root **www/static/js**.

##Libs
Any libraries that you require should be put in the **lib** folder. All files in here will be compiled into a single minified file. This will be output to **www/static/js/lib.js**.

##CSS
You can style your application using SASS. You will find all of the style config files located in the **sass** folder. All files inside here will be compiled and minified into a single CSS file and will output to **www/static/css/main.css**. Bootstrap 3 is already included and will be compiled with your application.
