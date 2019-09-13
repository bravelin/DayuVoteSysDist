// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportXml2js = require('../../../app/middleware/xml2js');

declare module 'egg' {
  interface IMiddleware {
    xml2js: typeof ExportXml2js;
  }
}
