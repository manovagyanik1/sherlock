import React from 'react';
import CircularImage from '../../components/circularImage/circularImage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import SectionLink from "../../components/sectionLink/sectionLink";
import Gen from "../../utils/gen";

class Home extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object
  };

  render() {
    return (
      <div className="home">
        <CircularImage imageUrl='https://badgephotos.amazon.com/?uid=shubhagr' description='welcome shubhagr' />
        <div className="header">What would you like to do today?</div>
        <div className="section-links">
          <SectionLink name={'My tasks'} url={`/tasker`}/>
          <SectionLink name={'Create tasks'} url={`/asker`}/>
          <SectionLink name={'Manage tasks'} url={`/tasker`}/>
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
)(Home);
