// wpTails Main Gulp File

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

//Require Gulp or nothing works :)
const gulp = require('gulp');

/** Internal Dependencies */
const gConfig = require( "./configs/gulp.config.js" );
const tConfig = require( "./configs/theme.config.js" );

/** External Dependencies */
//const clean = require( './gulp/clean' );
import * as clean from './gulp/clean.js';

/** Gulp Tasks */
//gulp.task('clean', clean.cleanChild);
