/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file styles.js
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
import { cssWpStyleSheetBnr } from "../configs/banners.config";

/** External Dependencies */
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

/** */
const sass = gulpSass( dartSass );         

/** 
 * This is the main stylesheet for your wordpress installation. This file is
 * required by wordpress, however it is not used by wpTails. This file is
 * created based on your ...(add more)
 */
export function wpStyles() {
    const srcPath = [ `${gConfig.srcPath}/scss/style.scss` ];
    const destPath = `${gConfig.devPath}/${tData.themeMain}/`;
    return gulp.src( srcPath )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()))
        
        
        .pipe( gConfig.gPlugins.replace( 'wpStyleSheet', `${ cssWpStyleSheetBnr }` ) )

        .pipe( sass().on( 'error', sass.logError ) )

        .pipe(gConfig.gPlugins.sourcemaps.write( '.' ))

        .pipe( gulp.dest( destPath ) );
};

/** WP-Child style.css */

/** Main App CSS */

/** App Admin CSS */

/** APP GPL CSS */

/** APP RTL CSS */

/** APP RTL Admin CSS */

/** APP RTL GPL CSS */

/** APP RTL Child CSS */



/** EOF */