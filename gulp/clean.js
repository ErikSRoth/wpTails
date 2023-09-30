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
 * TODO: add bug reporting and issue information
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */
import del from "del";

/** Various functions of file type cleanup scripts to be used within the Gulp workflow.
 *  All strings ($) are pulled from the config files, so nothing here should need to be changed.
 */

/** Clean Development Child Theme Build Folder */ 
export function ccdev() { 
  if ( tData.buildChild === true) {
    const delPath = [ 
    `${gConfig.devPath}/${tData.themeChild}/**/*`, 
    `!${gConfig.devPath}/${tData.themeChild}`,
    `!${gConfig.devPath}/${tData.themeChild}/.gitkeep` 
    ];
    return  del( delPath );
  } 
};

/** Clean Distribution Child Theme Build Folder*/ 
export function ccdist() { 
  if ( tData.buildChild === true) {
    const delPath = [ 
    `${gConfig.distPath}/${tData.themeChild}/**/*`, 
    `!${gConfig.distPath}${tData.themeChild}`,
    `!${gConfig.distPath}/${tData.themeChild}/.gitkeep`
    ];
    return  del( delPath );
  } 
};

/** Clean Development Main Theme Build Folder */ 
export function cmdev() { 
  if ( tData.buildMain === true) {
    const delPath = [ 
    `${gConfig.devPath}/${tData.themeMain}/**/*`, 
    `!${gConfig.devPath}/${tData.themeMain}`,
    `!${gConfig.devPath}/${tData.themeMain}/.gitkeep`
    ];
    return  del( delPath );
  } 
};

/** Clean Distribution main Theme Build Folder*/ 
export function cmdist() { 
  if ( tData.buildMain === true) {
    const delPath = [ 
    `${gConfig.distPath}/${tData.themeMain}/**/*`, 
    `!${gConfig.distPath}${tData.themeMain}`,
    `!${gConfig.distPath}/${tData.themeMain}/.gitkeep`
    ];
    return  del( delPath );
  } 
};

/** Clean Development GPL for WP Repository Theme Build Folder */ 
export function cgdev() { 
  if ( tData.buildGpl === true) {
    const delPath = [ 
    `${gConfig.devPath}/${tData.themeGpl}/**/*`, 
    `!${gConfig.devPath}/${tData.themeGpl}`,
    `!${gConfig.devPath}/${tData.themeGpl}/.gitkeep`
    ];
    return  del( delPath );
  } 
};

/** Clean Distribution GPL for WP Repository Theme Build Folder*/ 
export function cgdist() { 
  if ( tData.buildGpl === true) {
    const delPath = [ 
    `${gConfig.distPath}/${tData.themeGpl}/**/*`, 
    `!${gConfig.distPath}${tData.themeGpl}`,
    `!${gConfig.distPath}/${tData.themeGpl}/.gitkeep`
    ];
    return  del( delPath );
  } 
};

/** Clean Dev SCSS/CSS files on BrowserSync reload to apply changes */
export function clnCss() {
  const delPath = [ 
    `${gConfig.rootPath}/${tData.themeMain}/assets/css/**/*`, 
    `!${gConfig.rootPath}/${tData.themeMain}/assets/css`,
    ];
    return  del( delPath );
};

/** Clean Dev JS files on BrowserSync reload to apply changes */
export function clnJs() {
  const delPath = [ 
    `${gConfig.rootPath}/${tData.themeMain}/assets/js/**/*`, 
    `!${gConfig.rootPath}/${tData.themeMain}/assets/js`,
    ];
    return  del( delPath );
}

/** End of various exported Gulp clean functions */

/** EOF */