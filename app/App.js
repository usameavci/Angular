/**
 * App.js - v1.0
 * Copyright (c) 2014-2015, Luke Freeman
 *
 * App.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Luke Freeman
 */

(function(){

    //require dependancies
 	var utils   = require('./modules/Utils'),
        angular = require('angular'),
        cookies = require('angular-cookies'),
        route   = require('angular-route'),
        animate = require('angular-animate');

    //setup a namespace
    utils.namespace('APP');

    APP = angular.module('myApp',[route,animate]);
    APP.api = 'http://localhost:8080';

    //require modules
    var controllers  = require('./modules/Controller'),
        router       = require('./modules/Router'),
        directive    = require('./modules/Directive');

}());
