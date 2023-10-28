/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file gulp.config.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * 
 * @version 1.0.0
 * @since 1.0.0
 * 
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
import * as pkg from "../package.json";

/** External Dependencies */

/**
 * Everything contained below is the configuration settings for the theme. It
 * is meant to be modified to suit your needs. For complete instructions on
 * how and what to modify, please refer to the theme modification documentation.
 * 
 * Each section is commented heavily and should be self-explanatory.
 * 
 * @see documentation/theme-modification.html
 *  
 */

/**
 * The theme name: The name of you theme should be a normal string in plain
 * text. Some examples would be: 'My Theme', 'My Awesome Theme', 'My Theme 2023'.
 * As you can see even spaces are ok adn you do not need '-' or '_' to separate
 * words in your theme name. 
 */
 export const themeName = 'wpTails';

/**
 * The theme slug: The slug of your theme should be a lowercase string with
 * dashes separating words. Some examples would be: 'my-theme', 'my-awesome-theme',
 * 'my-theme-2023' or simply 'mytheme'. 
 */
export const themeSlug = 'wptails';

/**
 * Theme Version: The theme version is a string that should be in the format
 * of 'x.x.x'. Some examples would be: '1.0.0', '1.0.1', '1.1.0', '1.1.1', '2.0.0',
 */
export const themeVersion = pkg.version;

/**
 * Theme URI (URL): The theme URI is the URL of your theme. This is the URL
 */
export const themeUri = 'https://github.com/ErikSRoth/wpTails';

/**
 * Theme Description: The theme description is a short description of your theme.
 */
export const themeDesc = 'A Multiuse Wordpress Theme';

/**
 * Theme Tags: The theme tags are a comma separated list of tags that describe
 * your theme. These tags are used by the Wordpress Theme Repository to help
 * users find your theme. Some examples would be: 'blog', 'e-commerce', 'portfolio',
 * 'responsive', 'custom-background', 'custom-logo', 'custom-menu', 'featured-images',
 * 'footer-widgets', 'full-width-template', 'theme-options', 'threaded-comments', etc.
 */
export const themeTags = 'blog, e-commerce, portfolio, responsive, custom-background, custom-logo, custom-menu, featured-images, footer-widgets, full-width-template, theme-options, threaded-comments';

/**
 * Author
 */
export const authorName = 'Erik S. Roth';
export const authorEmail = 'erikroth@isu.edu';
export const authorUrl = 'https://erikroth.me';
export const authorCompany = 'Idaho State University';
export const authorCompanyUrl = 'https://isu.edu';

/**
 * License
 */
export const license = 'MIT';
export const licenseUrl = 'https://opensource.org/licenses/MIT';
export const spdxLicense = 'MIT';

/**
 * Which version you build can be set with the following variables. The default
 * boolean value is set to true. If you do want to build a child theme or a
 * gpl version foo the theme, set the corresponding theme variables to false.
 * It is quite common for theme developers to only build a main and child them 
 * if they plan on selling the them. However, it is helpful to get your theme
 * noticed by building a lite version and placing it in the Wordpress Theme
 * Repository. You should always start with the main theme and then build the
 * child theme and gpl version from there.
 */
export const buildMain = true;
export const buildChild = true;
export const buildGpl = true;

/** 
 * Use Banners: The banners are used to provide information about the file, author,
 * license, and version. They are meant to be modified to fit your theme. You can
 * remove them from the builds by setting this variable to false.
 */
export const useBanners = true;




/** Do No Change Anything Below This Line Unless You Know What You Are Doing! */

/** 
 * These are settings that should never need to be changed. These are the default settings
 * for certain parameters that are used throughout to build your theme. You should 
 * not need to change these settings unless you are doing something very specific
 * with your theme. Keep in mind that if you do change these settings, you will
 * possibly break the gulp workflow and your theme will not build correctly.
 */

/**
 * Theme versions: There are three versions that you can set for your theme. The
 * first of these is of course the main theme which will use the 'themeSlug' as
 * its folder name. The second is the child theme which will use the 'themeSlug-child'
 * as its folder name. The third is reserved for a 'gpl'version of the them that
 * you can place in the Wordpress Theme Repository. This version will have some limited
 * functionality and will be named 'themeSlug-gpl'.
 */
export const themeMain = `${themeSlug}`;
export const themeChild = `${themeSlug}-child`;
export const themeGpl = `${themeSlug}-gpl`;

/**
 * Versioning
 */
export const minwp  = '6.0';
export const minphp = '8.0';
export const wpv = '6.1';
export const phpv = '8.1';



/**
 * Copyright start and end years.
 */
export const copyStart = '2022';
export const copyEnd = new Date().getFullYear();

/** EOF */