import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Attachments = new Mongo.Collection('Attachments');

Attachments.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Attachments.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Attachments.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the attachment.',
    optional: true
  },
  pid: {
    type: String,
    label: 'Attachment parent id',
    optional: true
  },
  fid: {
    type: String,
    label: 'Attachment file id',
    optional: true
  },
  type: {
    type: String,
    label: 'Type file',
    optional: true
  }
});

Attachments.attachSchema(Attachments.schema);

Factory.define('attachement', Attachments, {
  title: () => faker.hacker.phrase(),
});
