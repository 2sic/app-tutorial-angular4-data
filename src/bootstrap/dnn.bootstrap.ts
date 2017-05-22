// /**
//  * @license
//  * Copyright Google Inc. All Rights Reserved.
//  *
//  * Use of this source code is governed by an MIT-style license that can be
//  * found in the LICENSE file at https://angular.io/license
//  */

// import {ResourceLoader, platformCoreDynamic} from '@angular/compiler';
// import {PlatformRef, Provider, createPlatformFactory} from '@angular/core';

// import {INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS} from '@angular/platform-browser-dynamic/src/platform_providers';
// // import {CachedResourceLoader} from './resource_loader/resource_loader_cache';

// // export * from './private_export';
// // export {VERSION} from './version';
// /**
//  * @experimental
//  */
// // export const RESOURCE_CACHE_PROVIDER: Provider[] =
// //     [{provide: ResourceLoader, useClass: CachedResourceLoader}];

// /**
//  * @stable
//  */

// export const dnnProviders: Provider[] = [
//     INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//     {
//         provide: "mid",
//         useValue: 17
//     }
// ]

// export const platformBrowserDnn = createPlatformFactory(
//     platformCoreDynamic, 'browserDnn', dnnProviders);


// // note: more ideas on http://stackoverflow.com/questions/35215112/pass-page-global-variables-into-angular2-app-for-use-with-services