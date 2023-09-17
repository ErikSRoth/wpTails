// wpTails Main Gulp File

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

//Require Gulp or nothing works :)
const gulp = require('gulp');

/** Internal Dependencies */
import * as gConfig from "./configs/gulp.config";

/** External Dependencies */
import * as clean from "./gulp/clean";

/** Gulp Tasks */
gulp.task('clean', clean.cleanChild);