import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { ToggleSwitch } from './toggle-switch.js';

export class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleNotificationPreferenceUpdate = this.handleNotificationPreferenceUpdate.bind(this);
    this.notifications = this.notifications.bind(this);
  }

  handleNotificationPreferenceUpdate(type, value) {
    Meteor.call('users.updateNotificationPreference', { type, value }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      }
    });
  }

  notifications() {
    const { notifications } = this.props;

    return [{
      id: 'productUpdates',
      label: 'When product updates occur',
      value: notifications.productUpdates,
    }, {
      id: 'productAvailability',
      label: 'When the product\'s availability changes',
      value: notifications.productAvailability,
    }];
  }

  render() {
    return (<div className="Notifications">
      <Panel
        header="Email Notifications"
      >
        <form ref="notifications">
          <Table bordered className="borderless">
            <tbody>
              {this.notifications().map(({ id, label, value }) => (<tr key={ id }>
                <td className="center-vertical text-left">{ label }</td>
                <td className="center-vertical text-right">
                  <ToggleSwitch
                    id={ id }
                    toggled={ value }
                    onLabel="Yes"
                    offLabel="No"
                    onToggle={ this.handleNotificationPreferenceUpdate }
                  />
                </td>
              </tr>))}
            </tbody>
          </Table>
        </form>
      </Panel>
    </div>);
  }
}

Notifications.propTypes = {
  notifications: React.PropTypes.object.isRequired,
};
