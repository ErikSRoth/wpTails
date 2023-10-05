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
    ` * @version ${tData.themeVersion}\n` +
    ` * \n` +
    ` */\n\n`;

/** Banner for JS Files */
export const jsBnr = 
    '/**\n' +
    ` * ${tData.themeName} - A Multiuse Wordpress Theme.\n` +
    ` * Built for WordPress Version: ${tData.wpv}, Running on PHP Version: ${tData.phpv}\n` +
    ` * Copyright ©${tData.copyStart}-${tData.copyEnd}   ${tData.authorName}  <${tData.authorEmail}>\n` +
    ` * Licensed under the ${tData.license} License <${tData.licenseUrl}>\n` +
    ` * SPDX-License-Identifier: ${tData.spdxLicense}\n` +
    ` * \n` +
    ` * @package ${tData.themeName}\n` +
    ` * @version ${tData.themeVersion}\n` +
    ` * \n` +
    ` */\n \n`;

/** 
 * Banner for WP Style CSS File
 */
export const cssWpStyleSheetBnr = 
    `/*!\n` +
    `Theme Name: ${tData.themeName}\n` +
    `Theme URI: ${tData.themeUri}\n` +
    `${tData.themeName} Copyright ©${tData.copyStart}-${tData.copyEnd} ${tData.authorName} ${tData.authorUrl}\n` +
    `Author: ${tData.authorName}\n` +
    `Author URI: ${tData.authorUrl}\n` +
    `Description: ${tData.themeDesc}\n` +
    `Tags: ${tData.themeTags}\n` +
    `Version: ${tData.themeVersion}\n` +
    `Requires at least: ${tData.minwp}\n` +
    `Tested up to: ${tData.wpv}\n` +
    `Requires PHP: ${tData.minphp}\n` +
    `PHP Tested up to: ${tData.phpv}\n` +
    `License: ${tData.license}\n` +
    `License URI: ${tData.licenseUrl}\n` +
    `Text Domain: ${tData.themeSlug}\n ` +
    ` \n` +
    `*** DO NOT MODIFY THIS FILE OR YOU WILL BREAK YOUR THEME! ***\n` +
    ` \n` +
    `This file is only here because without it WordPress will cease to function properly.\n` +
    `If you need customize the CSS of your website, please use the ${tData.themeName} options section within \n` + 
    `your WordPress admin dashboard and/or by using the WordPress Customizer. If you wish to add your \n` +
    `own custom CSS, PHP, JS, or other code, please use the ${tData.themeName} child theme which should have been\n` +
    `included with your theme package. If you do not have a child theme, then please contact the author \n` +
    `of this theme at ( ${tData.authorEmail} ) to obtain one as anything changed within the main theme \n` +
    `files directly, will be overwritten and lost when the theme is updated.\n` +
    ` \n` +
    `*/`;

/** 
 * Banner for WP Child Style CSS File
 */
export const wpChildStyleSheet = 
    `/*!\n` +
    `Theme Name: ${tData.themeName} Child Theme\n` +
    `Theme URI: ${tData.themeUri}\n` +
    `${tData.themeName} Copyright ©${tData.copyStart}-${tData.copyEnd} ${tData.authorName} ${tData.authorUrl}\n` +
    `Author: ${tData.authorName}\n` +
    `Author URI: ${tData.authorUrl}\n` +
    `Description: ${tData.themeDesc}\n` +
    `Tags: ${tData.themeTags}\n` +
    `Version: ${tData.themeVersion}\n` +
    `Template: ${tData.themeSlug}\n` +
    ` \n` +
    `*** DO NOT MODIFY ANYTHING ABOVE THIS LINE OR YOU WILL BREAK YOUR THEME! ***\n` +
    ` \n` +
    `Use this child CSS page to overwrite the ${tData.themeName} theme CSS values or to create\n` + 
    `your own CSS customizations. Add your custom code below this comment block.\n` +
    '*/';

/**
 * Banner for GPL Style CSS File
 */
export const gplStyleSheet = 
    `/*!\n` +
    `Theme Name: ${tData.themeName}\n` +
    `Theme URI: ${tData.themeUri}\n` +
    `${tData.themeName} Copyright ©${tData.copyStart}-${tData.copyEnd} ${tData.authorName} ${tData.authorUrl}\n` +
    `Author: ${tData.authorName}\n` +
    `Author URI: ${tData.authorUrl}\n` +
    `Description: ${tData.themeDesc}\n` +
    `Tags: ${tData.themeTags}\n` +
    `Version: ${tData.themeVersion}\n` +
    `Requires at least: ${tData.minwp}\n` +
    `Tested up to: ${tData.wpv}\n` +
    `Requires PHP: ${tData.minphp}\n` +
    `PHP Tested up to: ${tData.phpv}\n` +
    `License: ${tData.license}\n` +
    `License URI: ${tData.licenseUrl}\n` +
    `Text Domain: ${tData.themeSlug}\n ` +
    ` \n` +
    `This theme, like WordPress, is licensed under the GPL.\n` +
    `Use it to make something cool, have fun, and share what you've learned with others.\n ` +
    `*/`;

/** 
 * Banner for ALL Other CSS Files
 */
export const cssTopBnr = 
    '/*!\n' +
    `${tData.themeName} Copyright ©${tData.copyStart}-${tData.copyEnd} ${tData.authorName} ${tData.authorUrl}\n` +
    `License: ${tData.license}\n` +
    `License URI: ${tData.licenseUrl}\n` +
    `Text Domain: ${tData.themeSlug}\n` +
    `Version: ${tData.themeVersion}\n` +
    `*/ \n \n `;

/** EOF */