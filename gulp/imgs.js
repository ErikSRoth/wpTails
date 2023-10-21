/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file imgs.js
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

/** Theme Image Processing */
export function wpImages() {
    return gulp.src( `${gConfig.srcPath}/img/**/*`, `!${gConfig.srcPath}/img/.gitkeep`, `!${gConfig.srcPath}/img/favs/*.*` )
        .pipe( gulp.dest( `${gConfig.devPath}/${tData.themeMain}/assets/images` ) );
}

/** The Child Screenshot Image */
export function wpChildScreenshot() {
    return gulp.src( `${gConfig.srcPath}/img/screenshot.png` )
        .pipe( gulp.dest( `${gConfig.devPath}/${tData.themeChild}` ) );
}

/** */