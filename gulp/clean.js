/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file clean.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * @module wpTails/gulp/clean.js
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for the Gulp clean functions. If you need to modify the Gulp
 * Clean tasks and their usage, you should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
const gConfig = require( "../configs/gulp.config" );
const tData = require( "../configs/theme.config" );

/** External Dependencies */
//const del = require( 'del' );

/*
function cleanChild(done) {
    return del( [ `${ config.rootPath }/theme/wpTails-child/*` ] );
}*/

/** Export out Functions */
module.exports = {
    
}

/** EOF */