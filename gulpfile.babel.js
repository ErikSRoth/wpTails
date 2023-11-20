// wpTails Main Gulp File

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

//Require Gulp or nothing works :)
//const gulp = require('gulp');
import { parallel, series, task, watch} from 'gulp';

/** Internal Dependencies */
const gConfig = require( "./configs/gulp.config" );
const tConfig = require( "./configs/theme.config" );

//const browserSync = require('browser-sync').create();

/** External Dependencies */
import * as clean from './gulp/clean';
import * as php from './gulp/php';
import * as styles from './gulp/styles';
import * as scripts from './gulp/scripts';
import * as imgs from './gulp/imgs';
import * as fonts from './gulp/fonts';
import * as bSync from './gulp/bsync';

/** Gulp Tasks */

/** Gulp Cleanup Tasks */
/** Wipe Development Build Folders */
export const cleanDev = parallel( clean.cmdev );
/** Wipe Child Development Build Folders */
export const cleanChild = parallel( clean.ccdev );
/** Wipe Distribution Build Folders */
export const cleanDist = parallel( clean.ccdist, clean.cmdist, clean.cgdist );
/** Wipe GPL Development Build Folders */
export const cleanGpl = parallel( clean.cgdev);
/** Wipe ALL Distribution & Development Build Folders*/
export const cleanAll = parallel( clean.ccdev, clean.cmdev, clean.cgdev, clean.ccdist, clean.cmdist, clean.cgdist );
/** Wipe CSS Development Folders */
export const cleanCssDev = parallel( clean.clnCss );
/** Wipe JS Devvelopment Folder */
export const cleanJsDev = parallel( clean.clnJs );
/** End Of Gulp Cleanup Tasks */

/*function bSyncDev() {
    browserSync.init({
        open: true,
        injectChanges: true,
        proxy: 'https://wptails.local',
        https: { 
            key: '/Users/erikroth/Library/Application Support/Local/run/router/nginx/certs/wptails.local.key', 
            cert: '/Users/erikroth/Library/Application Support/Local/run/router/nginx/certs/wptails.local.crt' 
        }

    });
};          */

/** Watch Styles... */
function watchStyles() {
    return watch( `${gConfig.srcPath}/scss/**/*.scss`, series( styles.wpChildStyles, styles.wpStyles, styles.appAdminStyles, styles.appStyles, bSync.bSyncReload  ) );
};

/** Watch Scripts... */
function watchScripts() {
    return watch( `${gConfig.srcPath}/js/**/*.js`, series( scripts.jsBuildMain, scripts.jsBuildAdmin, scripts.jsBuildTools, bSync.bSyncReload  ) );
};

/** Watch PHP... */
function watchPhp() {
    return watch( `${gConfig.srcPath}/**/*.php`, series( php.phpDev, php.phpChildDev, bSync.bSyncReload  ) );
};

/** Watch Images... */
function watchImgs() {
    return watch( `${gConfig.srcPath}/img/**/*`, series( imgs.wpImages, imgs.wpChildScreenshot, imgs.wpFavs, bSync.bSyncReload  ) );
};

/** Watch Fonts... */
function watchFonts() {
    return watch( `${gConfig.srcPath}/fonts/**/*`, series( fonts.fontsDev, bSync.bSyncReload  ) );
};

/** Watch All... */
export const watchAll = parallel( watchStyles, watchScripts, watchPhp, watchImgs, watchFonts );


export const setupDev = series( cleanDev, 
                                series( styles.wpChildStyles, styles.wpStyles, styles.appAdminStyles, styles.appStyles ), 
                                series( scripts.jsBuildMain, scripts.jsBuildAdmin, scripts.jsBuildTools ),
                                series( php.phpDev, php.phpChildDev ),
                                series( imgs.wpImages, imgs.wpChildScreenshot, imgs.wpFavs, fonts.fontsDev ),
                                bSync.bSyncDev, watchAll
);

export const setupDist = series( cleanDist );

export const setupGpl = series( cleanGpl );


export const devenv = series( setupDev );

// export const gtest = series( );


/** EOF */