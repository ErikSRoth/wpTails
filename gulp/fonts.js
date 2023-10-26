/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file fonts.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for the Gulp stylesheet functions. If you need to modify the Gulp
 * styles tasks and their usage, you should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 */

/* eslint-env es6 */
'use strict';

/** Require Gulp or nothing works! */
import * as gulp from 'gulp';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */

/** Fonts Main Theme  */
export function fontsDev() {
    const srcPath = `${gConfig.srcPath}/fonts/**/*`;
    const destPath = `${gConfig.devPath}/${tData.themeMain}/assets/fonts/`;
    return gulp.src( srcPath )
        .pipe( gulp.dest( destPath ) );
};

/** Fonts GPL Theme  */
export function fontsGpl() {
    const srcPath = `${gConfig.srcPath}/fonts/**/*`;
    const destPath = `${gConfig.gplPath}/${tData.themeGpl}/assets/fonts/`;
    return gulp.src( srcPath )
        .pipe( gulp.dest( destPath ) );
};

/** EOF */