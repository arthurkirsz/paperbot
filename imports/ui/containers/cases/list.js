import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { Cases } from '../../../api/cases/cases.js';

import { CasesList } from '../../components/cases/list.js';
import { Loading } from '../../components/loading.js';


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('cases');
  if (subscription.ready()) {
    const cases = Cases.find().fetch();
    onData(null, { cases });
  }
};

export default composeWithTracker(composer, Loading)(CasesList);
