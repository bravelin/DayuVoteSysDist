// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActivity = require('../../../app/service/activity');
import ExportComplaint = require('../../../app/service/complaint');
import ExportDict = require('../../../app/service/dict');
import ExportIo = require('../../../app/service/io');
import ExportLogs = require('../../../app/service/logs');
import ExportManagers = require('../../../app/service/managers');
import ExportPlayer = require('../../../app/service/player');
import ExportSys = require('../../../app/service/sys');
import ExportUe = require('../../../app/service/ue');
import ExportUser = require('../../../app/service/user');
import ExportVisit = require('../../../app/service/visit');
import ExportVote = require('../../../app/service/vote');
import ExportWx = require('../../../app/service/wx');

declare module 'egg' {
  interface IService {
    activity: ExportActivity;
    complaint: ExportComplaint;
    dict: ExportDict;
    io: ExportIo;
    logs: ExportLogs;
    managers: ExportManagers;
    player: ExportPlayer;
    sys: ExportSys;
    ue: ExportUe;
    user: ExportUser;
    visit: ExportVisit;
    vote: ExportVote;
    wx: ExportWx;
  }
}
