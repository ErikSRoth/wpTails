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
var args = require('yargs').argv;
import * as clean from './gulp/clean';
import * as php from './gulp/php';
import * as styles from './gulp/styles';
import * as scripts from './gulp/scripts';
import * as imgs from './gulp/imgs';
import * as fonts from './gulp/fonts';

/** Gulp Tasks */

/** Wipe Development Build Folders */
export const cleanDev = parallel( clean.ccdev, clean.cmdev, clean.cgdev );

/** Wipe Distribution Build Folders */
export const cleanDist = parallel( clean.ccdist, clean.cmdist, clean.cgdist );

/** Gulp Cleanup Tasks 
function cleanUp( done ) {

    if ( args.all ) {
       series( clean.ccdev, clean.cmdev, clean.cgdev, clean.ccdist, clean.cmdist, clean.cgdist );
    } else if ( args.dist ) {
        series( clean.ccdist, clean.cmdist, clean.cgdist );
    } else if ( args.dev ) {   
        series( clean.ccdev, clean.cmdev, clean.cgdev );
    }
    done();
}*/


export const setupDev = series( cleanDev, 
                                parallel( styles.wpChildStyles, styles.wpStyles ), 
                                parallel( styles.appAdminStyles, styles.appStyles ),
                                parallel( scripts.jsBuildMain, scripts.jsBuildAdmin, scripts.jsBuildTools ),
                                parallel( php.wpPhp, php.wpChildPhp ),
                                parallel( imgs.wpImages, imgs.wpChildScreenshot, imgs.wpFavs ),
                                parallel( fonts.fontsDev ) 
                                );


//export const gtest = series( cleanUp );


/** EOF */