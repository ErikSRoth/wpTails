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
import * as clean from './gulp/clean';

/** Gulp Tasks */

/** Wipe Development Build Folders */
export const cleanDev = parallel( clean.ccdev, clean.cmdev, clean.cgdev );

/** Wipe Distribution Build Folders */
export const cleanDist = parallel( clean.ccdist, clean.cmdist, clean.cgdist );