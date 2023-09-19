/** 
 * wpTails ©2022-Present Erik Roth <eriksroth@gmail.com>
 * Licensed under the MIT License <https://opensource.org/licenses/MIT>
 * SPDX-License-Identifier: MIT
 * 
 * Gulp Configuration Settings
 * @file gulp.config.js
 * @description Gulp configuration settings for wpTails Gulp workflow.
 * @package wpTails
 * @module wpTails/gulp/theme.config
 * @version 1.0.0
 * @since 1.0.0
 * 
 * You should NOT need to modify anything in this file. This file contains the
 * configuration settings for Gulp. If you need to modify the Gulp tasks, you
 * should do so in the `gulpfile.babel.js` file in the root directory.
 * 
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */

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
 const themeName = 'wpTails';

/**
 * The theme slug: The slug of your theme should be a lowercase string with
 * dashes separating words. Some examples would be: 'my-theme', 'my-awesome-theme',
 * 'my-theme-2023' or simply 'mytheme'. 
 */
const themeSlug = 'wptails';

/**
 * Theme versions: There are three versions that you can set for your theme. The
 * first of these is of course the main theme which will use the 'themeSlug' as
 * its folder name. The second is the child theme which will use the 'themeSlug-child'
 * as its folder name. The third is reserved for a 'lite'version of the them that
 * you can place in the Wordpress Theme Repository. This version will have some limited
 * functionality and will be named 'themeSlug-lite'.
 */
const themeMain = `${themeSlug}`;
const themeChild = `${themeSlug}-child`;
const themeLite = `${themeSlug}-lite`;





/** Export out Functions and Constants */
module.exports = {
    themeName,
    themeSlug
}

/** EOF */