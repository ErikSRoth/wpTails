/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * File Banner Configuration Settings
 * @file banners.config.js
 * @description Banner configuration settings for various wpTails files.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 * These banners are used to provide information about the file, author,
 * license, and version. They are meant to be modified to fit your theme. 
 * The banners are added to the files at build time for both the development
 * and production versions of the theme.
 * 
 * Should you not wish to use the banners, you can remove them from the builds
 * by editing the 'theme.config.js' file and setting the 'useBanners' property
 * to 'false' (it is true by default).
 * 
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config.js";
import * as tData from "../configs/theme.config";
import * as pkg from "../package.json";

/** External Dependencies */

/** Top Banner for all 'PHP' Files (#topBanner) */
export const phpTopBnr = 
    '/**\n' +
    ` * ${tData.themeName} - A Multiuse Wordpress Theme.\n` +
    ` * Built for WordPress Version: ${tData.wpv}, Running on PHP Version: ${tData .phpv}\n` +
    ` * Copyright ©${tData.copyStart}-${tData.copyEnd}   ${tData.authorName}  <${tData.authorEmail}>\n` +
    ` * Licensed under the ${tData.license} License <${tData.licenseUrl}>\n` +
    ` * SPDX-License-Identifier: ${tData.spdxLicense}\n` +
    ` * \n` +
    ` * @package ${tData.themeName}\n` +
    ` * @version ${pkg.version}\n` +
    ` * \n` +
    ` */\n\n`;


/** Banner for JS Files */
export const jsBnr = 
    '/**\n' +
    ` * ${tData.themeName} - A Multiuse Wordpress Theme.\n` +
    ` * Built for WordPress Version: ${tData.wpv}, Running on PHP Version: ${tData .phpv}\n` +
    ` * Copyright ©${tData.copyStart}-${tData.copyEnd}   ${tData.authorName}  <${tData.authorEmail}>\n` +
    ` * Licensed under the ${tData.license} License <${tData.licenseUrl}>\n` +
    ` * SPDX-License-Identifier: ${tData.spdxLicense}\n` +
    ` * \n` +
    ` * @package ${tData.themeName}\n` +
    ` * @version ${pkg.version}\n` +
    ` * \n` +
    ` */\n\n`;


/** Top of Banner for ALL CSS Files */
export const cssTopBnr = 
    '/*!\n' +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` */\n\n`;

/** Bottom of Banner for WP Style CSS File */
export const cssBotWpBnr = 
    '/*!\n' +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` */\n\n`;

/** Bottom of Banner for all other CSS File */
export const cssBotBnr = 
    '/*!\n' +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` * \n` +
    ` */\n\n`;


/** Bottom Attribution Banner (add More Later) */
export const attriBnr = 
    '/**\n' +
    ` * ${tData.themeName} was built with wpTails WordPress Theme Development System\n` +
    ` * wpTails was built by Erik S. Roth  https://github.com/ErikSRoth\n` +
    ` * and is licensed under the MIT License <https://opensource.org/licenses/MIT>\n` +
    ` */\n`;

/** EOF */