import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { Notifications } from '../components/notifications.js';
import { Loading } from '../components/loading.js';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('users.notifications');

  if (subscription.ready()) {
    const user = Meteor.users.findOne();
    const notifications = user && user.profile ? user.profile.notifications : {};
    onData(null, { notifications });
  }
};

export default composeWithTracker(composer, Loading)(Notifications);
