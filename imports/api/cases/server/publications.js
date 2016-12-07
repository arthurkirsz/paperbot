import { Meteor } from 'meteor/meteor';
import { Cases } from '../cases';

Meteor.publish('cases', () => Cases.find());
