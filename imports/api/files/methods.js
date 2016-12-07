import { Files } from './files';
import { Attachments } from '../attachments/attachments';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertFile = new ValidatedMethod({
  name: 'files.insert',
  validate: new SimpleSchema({
    file: { type: Object, blackbox: true },
  }).validator(),
  run({ file }) {
    let id = Files.insert(file);
    return id;
  },
});

export const updateFile = new ValidatedMethod({
  name: 'files.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Files.update(_id, { $set: update });
  },
});

export const removeFile = new ValidatedMethod({
  name: 'files.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Files.remove({_id : _id});
    Attachments.update({ fid: _id }, { $set: { fid: ""} });
  },
});

rateLimit({
  methods: [
    insertFile,
    updateFile,
    removeFile,
  ],
  limit: 5,
  timeRange: 1000,
});
