import { composeWithTracker } from 'react-komposer';
import { Files } from '../../../api/files/files.js';
import { Attachments } from '../../../api/attachments/attachments.js';
import { Cases } from '../../../api/cases/cases.js';
import { Meteor } from 'meteor/meteor';
import { Loading } from '../../components/loading.js';
import { CaseDetail } from '../../components/cases/detail.js';

const composer = (params, onData) => {
  const pid = params.id;
  const sF = Meteor.subscribe('files');
  const sP = Meteor.subscribe('cases');
  const sA = Meteor.subscribe('attachments');

  if (sF.ready() && sP.ready() && sA.ready()) {
    const files = Files.find({ 'meta.pid': pid }).fetch();
    const caseItem = Cases.findOne(pid);
    const attachments = Attachments.find({ pid: pid }).fetch();
    onData(null, { files, caseItem, pid, attachments });
  }
};

export default composeWithTracker(composer, Loading)(CaseDetail);
