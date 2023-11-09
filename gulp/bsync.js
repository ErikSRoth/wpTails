/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file bsync.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for the Gulp BrowserSync functions. If you need to modify the Gulp
 * BrowserSync tasks and their usage, you should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 * TODO: add bug reporting and issue information
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */
import * as brSync from 'browser-sync';

/** BrowserSync Configuration */
const browserSync = brSync.create();

/** BrowserSync Control Scripts */
export function bSyncDev(done) {
    browserSync.init({
        proxy: tData.bsProxy,
        https: tData.bsHttps,
        //port: gConfig.port,
        open: tData.bsOpen,
        notify: tData.bsNotify,
        browser: tData.bsBrowser,
        ghostMode: {
            clicks: tData.bsGhostModeClicks,
            location: tData.bsGhostModeLocation,
            forms: tData.bsGhostModeForms,
            scroll: tData.bsGhostModeScroll
        }
    });
    done();
}

export function bSyncReload(done) {
    browserSync.reload();
    done();
    
}

/** EOF */