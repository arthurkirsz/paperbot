import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
// BrowserPolicy.content.allowDataUrlForAll();
BrowserPolicy.content.allowDataUrlForAll('*.filepicker.io');
BrowserPolicy.content.allowOriginForAll( '*.filepicker.io' );
BrowserPolicy.content.allowOriginForAll( '*.cloudfront.net' );
