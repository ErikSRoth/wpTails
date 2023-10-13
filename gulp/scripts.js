/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file scripts.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for the Gulp javascript functions. If you need to modify the Gulp
 * javascript tasks and their usage, you should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 * TODO: add bug reporting and issue information and ....
 */

/* eslint-env es6 */
'use strict';

/** Require Gulp or nothing works! */
import * as gulp from 'gulp';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */
import { jsBanner } from "../configs/banners.config";

/** 
 * JS Functions
*/

/** App Main JS */
export function jsBuildMain() {
    const srcPath = [ `${gConfig.srcPath}/js/${tData.themeSlug}.js`, `${gConfig.srcPath}/js/partials/app/*.js` ];
    const destPath = `${gConfig.astsPath}/js/`;
    return gulp.src( srcPath )
        .pipe( gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()) )
        .pipe( gConfig.gPlugins.babel( { presets: [ '@babel/env' ] } ) )
        .pipe( gConfig.gPlugins.concat( `${tData.themeSlug}.js` ) )
        .pipe( gConfig.gPlugins.if( gConfig.isProd, gConfig.gPlugins.uglify() ) )
        .pipe( gConfig.gPlugins.headerComment( jsBanner  ) )
        .pipe(gConfig.gPlugins.sourcemaps.write( '.' ))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** App Admin JS */
export function jsBuildAdmin() {
    const srcPath = [ `${gConfig.srcPath}/js/${tData.themeSlug}-admin.js`, `${gConfig.srcPath}/js/partials/admin/*.js` ];
    const destPath = `${gConfig.astsPath}/js/`;
    return gulp.src( srcPath )
        .pipe( gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()) )
        .pipe( gConfig.gPlugins.babel( { presets: [ '@babel/env' ] } ) )
        .pipe( gConfig.gPlugins.concat( `${tData.themeSlug}-admin.js` ) )
        .pipe( gConfig.gPlugins.if( gConfig.isProd, gConfig.gPlugins.uglify() ) )
        .pipe( gConfig.gPlugins.headerComment( jsBanner  ) )
        .pipe(gConfig.gPlugins.sourcemaps.write( '.' ))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** App tools JS */
export function jsBuildTools() {
    const srcPath = [ `${gConfig.srcPath}/js/${tData.themeSlug}-tools.js`, `${gConfig.srcPath}/js/partials/tools/*.js` ];
    const destPath = `${gConfig.astsPath}/js/`;
    return gulp.src( srcPath )
        .pipe( gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()) )
        .pipe( gConfig.gPlugins.babel( { presets: [ '@babel/env' ] } ) )
        .pipe( gConfig.gPlugins.concat( `${tData.themeSlug}-tools.js` ) )
        .pipe( gConfig.gPlugins.if( gConfig.isProd, gConfig.gPlugins.uglify() ) )
        .pipe( gConfig.gPlugins.headerComment( jsBanner  ) )
        .pipe(gConfig.gPlugins.sourcemaps.write( '.' ))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** EOF */