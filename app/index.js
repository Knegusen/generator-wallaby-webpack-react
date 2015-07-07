'use strict';

var generators = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');

module.exports = generators.NamedBase.extend({

    directoryCreation: function () {
        var _name = this.arguments[0]; // retrieve the name argument
        this.mkdir(_name);
        this._createSrcFolder(_name);
        this._createSrcTestFolder(_name);
    },

    copyFiles: function () {
        this._createPackageJson();
        this._createWallabyJS();
    },

    _createWallabyJS: function () {
        this.copy('wallaby.js', path.join(this.arguments[0], 'wallaby.js'));
    },

    _createPackageJson: function () {
        this.template('package.json', path.join(this.arguments[0], 'package.json'), {packageName: this.arguments[0]});
    },

    _createSrcFolder: function (name) {
        this.mkdir(name + "/src")
    },

    _createSrcTestFolder: function (name) {
        this.mkdir(name + "/src-test")
    }

//    constructor : function(){
//        generators.Base.apply(this, arguments);
//    },
//    scaffoldFolders: function(){
//        this.mkdir("src");
//        this.mkdir("src-test");
//    },
//
//    copyMainFiles: function(){
//        this.copy("src-test/phantomjs-shim.js", "src/phantomjs-shim.js");
//        this.copy("src/BowlingGame.js", "src/BowlingGame.js");
//        this.copy("src-test/BowlingGameSpec.js", "src/BowlingGameSpec.js");
//    },
//
//    runNpm: function(){
//        var done = this.async();
//        this.npmInstall("", function(){
//            console.log("\nEverything Setup !!!\n");
//            done();
//        });
//    }
});