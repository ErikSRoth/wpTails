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
 */

/* eslint-env es6 */
'use strict';

/** Internal Dependencies */
import * as gConfig from "../configs/gulp.config";
import * as tData from "../configs/theme.config";

/** External Dependencies */
import del from "del";
import * as fs from "fs";
import * as path from "path";

/** */
/** */ 
export function cleanChild() { 



  //var filesX = 0;
  if ( tData.buildChild === true) {
    
    
    /**fs.readdir(`${gConfig.rootPath}/theme/${tData.themeSlug}-child`, (err, files) => {
      files.forEach(file => {
        filesX = filesX +1
     // files.filter( f => f !== ".gitkeep" )
      
      })
    })
    console.log( filesX );*/
   
    //fs.readdir( `!${gConfig.rootPath}/theme/${tData.themeSlug}-child`, (error, files) => { 
      //let totalFiles = files.length; // return the number of files
      //console.log(totalFiles); // print the total number of files
   //})

  // return console.log( "Done" );

//   
//if ( filesX > 0) {


try {
  const arrayOfFiles = fs.readdirSync(`${gConfig.rootPath}/theme/${tData.themeSlug}-child`)
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}


  const delPath = [ 
  `${gConfig.rootPath}/theme/${tData.themeSlug}-child/**/*`, 
  `!${gConfig.rootPath}/theme/${tData.themeSlug}-child`,
  `!${gConfig.rootPath}/theme/${tData.themeSlug}-child/.gitkeep`  
  ];
  return  del( delPath );
} else {
  return console.log( "No development theme child builds need to be cleaned." );
}
}
//  }
//}s


/** */
export function cleanMain() { 
  const delPath = [ 
  `${gConfig.rootPath}/theme/${tData.themeSlug}/**/*`, 
  `!${gConfig.rootPath}/theme/${tData.themeSlug}`,
  `!${gConfig.rootPath}/theme/${tData.themeSlug}/.gitkeep`  
  ];
  return del( delPath );
}

/** */
export function cleanLite() { 
  const delPath = [ 
  `${gConfig.rootPath}/theme/${tData.themeSlug}-lite/**/*`, 
  `!${gConfig.rootPath}/theme/${tData.themeSlug}-lite`,
  `!${gConfig.rootPath}/theme/${tData.themeSlug}-lite/.gitkeep`  
  ];
  return del( delPath );
}

/** */
export function cleanDevBuilds() {
  if ( tData.buildChild === true) {
    cleanChild();
  } else if ( tData.buildMain === true) {
    cleanMain();
  } else if ( tData.buildLite === true) {
    cleanLite();
  } else {
    console.log( "No development builds need to be cleaned." );
  }
}

/** */
export function cleanProdBuilds() {
  //
}

/** */
export function cleanAllBuilds() {
  //
}

/** */
export function cleanCss() {
  //
}

/** */
export function cleanJs() {
  //
}

/**  */

/** EOF */