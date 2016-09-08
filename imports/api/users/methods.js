import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

const handleUpdateNotificationPreference = new ValidatedMethod({
  name: 'users.updateNotificationPreference',
  validate: new SimpleSchema({
    type: { type: String },
    value: { type: Boolean },
  }).validator(),
  run({ type, value }) {
    const _id = this.userId;
    const update = {};
    update[`profile.notifications.${type}`] = value;

    Meteor.users.update(_id, { $set: update }, (error) => {
      if (error) throw new Meteor.Error('500', `${error}`);
    });
  },
});

rateLimit({
  methods: [
    handleUpdateNotificationPreference,
  ],
  limit: 5,
  timeRange: 1000,
});
