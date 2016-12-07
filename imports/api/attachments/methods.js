import { Attachments } from './attachments';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';
import { Random } from 'meteor/random';

export const insertAttachment = new ValidatedMethod({
  name: 'attachments.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run(attachment) {
    Attachments.insert(attachment);
  },
});

export const updateAttachment = new ValidatedMethod({
  name: 'attachments.update',
  validate: new SimpleSchema({
    _id: { type: String },
    fid: { type: String, optional: true },
  }).validator(),
  run({ _id, fid }) {
    Attachments.update(_id, { $set: {fid: fid} });
  },
});


export const removeAttachment = new ValidatedMethod({
  name: 'attachments.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Attachments.remove({_id : _id});
  },
});

rateLimit({
  methods: [
    insertAttachment,
    updateAttachment,
    removeAttachment,
  ],
  limit: 5,
  timeRange: 1000,
});
