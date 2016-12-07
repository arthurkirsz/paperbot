import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Files = new Mongo.Collection('Files');

Files.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Files.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Files.schema = new SimpleSchema({
  client: {
    type: String,
  },
  filename: {
    type: String
  },
  filepickerId: {
    type: Number,
    optional: true
  },
  isWriteable: {
    type: Boolean
  },
  mimetype: {
    type: String
  },
  size: {
    type: Number
  },
  url: {
    type: String
  }
});

Files.attachSchema(Files.schema);

Factory.define('title', Files, {
  title: () => faker.hacker.phrase(),
});
