import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Cases = new Mongo.Collection('Cases');

Cases.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Cases.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Cases.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the portfolio.',
  },
  template: {
    type: [Object],
    label: 'Case template',
    optional: true
  },
  'template.$.id': {
    type: String,
    label: 'Case template id of item ',
    optional: true
  },
  'template.$.name': {
    type: String,
    label: 'Case template',
    optional: true
  },
  'template.$.file': {
    type: String,
    label: 'Case template',
    optional: true
  }
});

Cases.attachSchema(Cases.schema);

Factory.define('portfolio', Cases, {
  title: () => faker.hacker.phrase(),
});
