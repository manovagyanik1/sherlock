import React from 'react';
import Button from '../../components/button/button';
import CircularImage from '../../components/circularImage/circularImage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import Select from 'react-select';
import Gen from "../../utils/gen";

const options = [
    { value: 'SPONSERED_PRODUCTS', label: 'Sponsored Products' },
    { value: 'AD_FEEDBACK', label: 'Ad Feedback' },
    { value: 'AMAZON_MARKETING_SERVICES', label: 'Amazon Marketing Services' },
    { value: 'QUALITY_COMPLIANCE_REVIEW', label: 'Quality Compliance Review' },
    { value: 'CATALOG_QUALITY', label: 'Catalog Quality' },
    { value: 'AMAZON_LIVE', label: 'Amazon Live' },
    { value: 'ASSOCIATES_PROCESS', label: 'Associates Process' },
    { value: 'CUSTOM', label: 'Custom' }
];

class Tasker extends React.Component {
  static propTypes = {
    likes: React.PropTypes.number,
    actions: React.PropTypes.object
  };

  onChange = (value) => {
    Gen.log(value);

  }

  render() {
    return (
      <div className="tasker">
        <div className="review-program-selection-wrapper selection-wrapper">
          <div className="header">Review Programs</div>
          <Select
            name="review-program-selection"
            className="selection"
            value="Select a program"
            options={options}
            onChange={this.onChange} />
        </div>
        <div className="review-template-selection-wrapper selection-wrapper">
          <div className="header">Review Templates</div>
          <Select
              name="review-template-selection"
              className="selection"
              value="Select a template"
              options={options}
              onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return Object.assign({}, {
    actions: bindActionCreators(actions, dispatch)
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasker);
