/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file php.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for the Gulp php functions. If you need to modify the Gulp
 * php tasks and their usage, you should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 * TODO: add bug reporting and issue information
 */

/* eslint-env es6 */
'use strict';

/** Require Gulp or nothing works! */
import * as gulp from 'gulp';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */
import { phpTopBnr, phpBotBnr } from "../configs/banners.config";

/** PHP Main Theme  */
export function phpDev() {
    const srcPath = [ `${gConfig.srcPath}/**/*.php` ];
    const destPath = `${gConfig.devPath}/${tData.themeMain}/`;
    return gulp.src( srcPath )
        .pipe( gConfig.gPlugins.replace( '#topBanner', `${phpTopBnr}` ) )
        .pipe( gConfig.gPlugins.replace( '#botBanner', `${phpBotBnr}` ) )
        .pipe( gulp.dest( destPath ) );
};



/** EOF */