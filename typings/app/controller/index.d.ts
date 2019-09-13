// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActivity = require('../../../app/controller/activity');
import ExportAdmin = require('../../../app/controller/admin');
import ExportClient = require('../../../app/controller/client');
import ExportComplaint = require('../../../app/controller/complaint');
import ExportDict = require('../../../app/controller/dict');
import ExportError = require('../../../app/controller/error');
import ExportLogs = require('../../../app/controller/logs');
import ExportManagers = require('../../../app/controller/managers');
import ExportPlayer = require('../../../app/controller/player');
import ExportUe = require('../../../app/controller/ue');
import ExportUser = require('../../../app/controller/user');
import ExportVisit = require('../../../app/controller/visit');
import ExportVote = require('../../../app/controller/vote');
import ExportWx = require('../../../app/controller/wx');

declare module 'egg' {
  interface IController {
    activity: ExportActivity;
    admin: ExportAdmin;
    client: ExportClient;
    complaint: ExportComplaint;
    dict: ExportDict;
    error: ExportError;
    logs: ExportLogs;
    managers: ExportManagers;
    player: ExportPlayer;
    ue: ExportUe;
    user: ExportUser;
    visit: ExportVisit;
    vote: ExportVote;
    wx: ExportWx;
  }
}
