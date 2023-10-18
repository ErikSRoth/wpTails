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
import * as cssBanner from "../configs/banners.config";

/** External Dependencies */
import dartSass from 'sass';
import gulpSass from 'gulp-sass'; 

/** SASS/SCSS Processing Command */
const sass = gulpSass( dartSass );         

/** 
 * This is the main stylesheet for your wordpress installation. This file is
 * required by wordpress, however it is not used by wpTails. This file is
 * created automatically based on your theme settings in your
 * theme.config.js file, so if you have issues check there first. 
 */
export function wpStyles() {
    const srcPath = [ `${gConfig.srcPath}/scss/style.scss` ];
    const destPath = `${gConfig.devPath}/${tData.themeMain}/`;
    return gulp.src( srcPath )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()))


        .pipe( sass().on( 'error', sass.logError ) )

        .pipe( gConfig.gPlugins.banner( cssBanner.wpStyleBanner ) )

        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.write( '.' )))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** 
 * This is the child stylesheet for your wordpress theme installation. This file is
 * required by wordpress for your child-theme. This file is where you can add custom
 * CSS for your theme Providing you are using the child theme for all of your custom
 * code. This file is created automatically based on your theme settings in your
 * theme.config.js file, so if you have issues check there first. 
 */
export function wpChildStyles() {
    const srcPath = [ `${gConfig.srcPath}/scss/style-child.scss` ];
    const destPath = `${gConfig.devPath}/${tData.themeChild}/`;
    return gulp.src( srcPath )
        .pipe( gConfig.gPlugins.rename( 'style.css' ) )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()))
        
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gConfig.gPlugins.headerComment( cssBanner.wpChildStyleBanner ) )

        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.write( '.' )))

        .pipe( gulp.dest( `${ destPath }` ) );
};

/** Main App CSS */
export function appStyles() {
    const srcPath = [ `${gConfig.srcPath}/scss/${tData.themeSlug}.scss` ];
    const destPath = `${gConfig.astsPath}/css/`;
    return gulp.src( srcPath )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()))

        .pipe( sass().on( 'error', sass.logError ) )

        .pipe( gConfig.gPlugins.headerComment( cssBanner.cssBanner ) )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.write( '.' )))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** App Admin CSS */
export function appAdminStyles() {
    const srcPath = [ `${gConfig.srcPath}/scss/${tData.themeSlug}-admin.scss` ];
    const destPath = `${gConfig.astsPath}/css/`;
    return gulp.src( srcPath )
        .pipe(gConfig.gPlugins.if(!gConfig.isProd, gConfig.gPlugins.sourcemaps.init()))
        .pipe( gConfig.gPlugins.replace( 'cssFileBanner', `${ cssBanner.cssTopBnr}` ) )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe(gConfig.gPlugins.sourcemaps.write( '.' ))
        .pipe( gulp.dest( `${ destPath }` ) );
};

/** APP GPL CSS */
export function appGplStyles() {
    //
};

/** APP RTL CSS */
export function appRtlStyles() {
    //
};

/** APP RTL Admin CSS */
export function appRtlAdminStyles() {
    //
};

/** APP RTL GPL CSS */
export function appRtlGplStyles() {
    //
};

/** APP RTL Child CSS */
export function appRtlChildStyles() {
    //
};

/** EOF */