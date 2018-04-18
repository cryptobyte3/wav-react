import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { FormLabel } from 'material-ui/Form';

import BaseComponent from '../../shared/BaseComponent';
import appDataTypes from '../../../constants/AppDataTypes';
import RadioButtons from '../../shared/inputs/RadioButtons';
import { RegisterTaskConstants } from '../../../constants/TaskConstants';

class ContactType extends BaseComponent {

    getValues = () => {
      return [
          { value: 'phone', label: 'Phone' },
          { value: 'email', label: 'Email '}
      ]
    };

    render() {
        const {
            currentUser: { data },
            onChange,
            value = '',
            voterData: { firstname = '', lastname = ''}
        } = this.props;
        return (
            <div>
                <FormLabel component="legend">
                    Hi { data.firstname } for today, we will need you to reach out to { firstname } { lastname } to see if they are registered to vote
                </FormLabel>
                <RadioButtons title='How did you contact them?'
                              onChange={val => onChange(RegisterTaskConstants.contactMode, val)}
                              value={value}
                              values={ this.getValues() } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.app[appDataTypes.profile]
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactType));