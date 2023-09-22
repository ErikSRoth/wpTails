// wpTails Main Gulp File

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

//Require Gulp or nothing works :)
//const gulp = require('gulp');
import {parallel, series} from 'gulp';

/** Internal Dependencies */
const gConfig = require( "./configs/gulp.config" );
const tConfig = require( "./configs/theme.config" );

/** External Dependencies */
//const clean = require( './gulp/clean' );
import {cleanChild} from './gulp/clean';

/** Gulp Tasks */
//gulp.task('cleanup', clean.cleanChild);

export const cleanChildBuild = series( cleanChild );