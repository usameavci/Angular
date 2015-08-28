/**
 * app.main.js - v1.0
 * Copyright (c) 2014-2015, Luke Freeman
 *
 * app.main.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Luke Freeman
 */
 
(function(){
 
    //require core modules
 	var angular = require('angular'),
        cookies = require('angular-cookies'),
        route   = require('angular-route'),
        animate = require('angular-animate');

    //bootstrap controllers, factories, directives...
    require('./app.bootstrap');

    //main module
    angular.module('myApp',[route,animate,cookies,'home']);

    //create application routing
    require('./app.router');

}());
