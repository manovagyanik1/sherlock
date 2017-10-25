import React from 'react';
import Button from '../../components/button/button';
import CircularImage from '../../components/circularImage/circularImage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';

const pageId = 2;

class Home extends React.Component {
  static propTypes = {
    likes: React.PropTypes.number,
    actions: React.PropTypes.object
  };

  handleLike = () => {
    return this.props.actions.likePostById(pageId);
  }

  render() {
    const { likes } = this.props;
    const likeCount = likes ? likes : 0;

    return (
      <div className="pageTwo">
        <CircularImage imageUrl='https://badgephotos.amazon.com/?uid=shubhagr' description='welcome shubhagr' />

        <Button onClick={() => {this.handleLike()}}>
          This post has {likeCount} likes.
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.rootReducer.likes[pageId]
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
