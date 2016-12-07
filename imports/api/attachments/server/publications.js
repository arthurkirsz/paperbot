import { Meteor } from 'meteor/meteor';
import { Attachments } from '../attachments';

Meteor.publish('attachments', () => Attachments.find());
