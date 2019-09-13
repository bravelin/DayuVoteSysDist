// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActivity = require('../../../app/model/Activity');
import ExportComplaint = require('../../../app/model/Complaint');
import ExportDict = require('../../../app/model/Dict');
import ExportLog = require('../../../app/model/Log');
import ExportManager = require('../../../app/model/Manager');
import ExportPlayer = require('../../../app/model/Player');
import ExportTrade = require('../../../app/model/Trade');
import ExportUser = require('../../../app/model/User');
import ExportVisit = require('../../../app/model/Visit');
import ExportVote = require('../../../app/model/Vote');

declare module 'egg' {
  interface IModel {
    Activity: ReturnType<typeof ExportActivity>;
    Complaint: ReturnType<typeof ExportComplaint>;
    Dict: ReturnType<typeof ExportDict>;
    Log: ReturnType<typeof ExportLog>;
    Manager: ReturnType<typeof ExportManager>;
    Player: ReturnType<typeof ExportPlayer>;
    Trade: ReturnType<typeof ExportTrade>;
    User: ReturnType<typeof ExportUser>;
    Visit: ReturnType<typeof ExportVisit>;
    Vote: ReturnType<typeof ExportVote>;
  }
}
