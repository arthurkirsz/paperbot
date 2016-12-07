import { Cases } from './cases';
import { Attachments } from '../attachments/attachments';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertCase = new ValidatedMethod({
  name: 'cases.insert',
  validate: new SimpleSchema({
    status: { type: Object, blackbox: true },
  }).validator(),
  run({ status }) {
    const pid = Cases.insert({title: status.title});
    for (var i = 0; i <= status.seed.length - 1; i++) {
      let attachment = { title: status.seed[i].title, pid: pid, fid: "", type: status.seed[i].type };


      if(status.seed[i].type != "") {
        const fileExists = Attachments.findOne({ "type": status.seed[i].type });

        if (fileExists) {
          attachment.fid = fileExists.fid;
          Attachments.insert(attachment);
        }
        else {
          Attachments.insert(attachment);
        }
      }
      else {
        Attachments.insert(attachment);
      }
    }
    return pid;
  },
});

export const updateCase = new ValidatedMethod({
  name: 'cases.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Cases.update(_id, { $set: update });
  },
});


export const removeCase = new ValidatedMethod({
  name: 'cases.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Cases.remove({_id : _id});
    //TODO : remove all attachments and files related to this Case before removing it :)
  },
});

rateLimit({
  methods: [
    insertCase,
    updateCase,
    removeCase,
  ],
  limit: 5,
  timeRange: 1000,
});
