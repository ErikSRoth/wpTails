/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file gulp.config.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * @module wpTails/gulp.config
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for Gulp. If you need to modify the Gulp tasks, you
 * should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
const tData = require( './theme.config.js' );

/** External Dependencies */
const gPlugins = require( 'gulp-load-plugins' )();
import path from 'path';

/** The root path is where all the npm run commands get executed from */
const rootPath = process.cwd();

/** The gulp path is where all the individual gulp process files reside */
const gulpPath = path.resolve( __dirname, `${rootPath}/gulp` );

/**
 * Theme types to use in project
 */
const themeTypes = {


}

/** Export out Functions and Constants */
module.exports = {
    gPlugins,
    rootPath,
    gulpPath,
    tData
}




/** EOF */