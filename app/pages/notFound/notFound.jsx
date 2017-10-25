import React from 'react';
import Button from '../../components/button/button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';

class NotFound extends React.Component {
  static propTypes = {
    gifs: React.PropTypes.array,
    actions: React.PropTypes.object
  };

  handleGetJSON = () => {
    return this.props.actions.fetchData();
  }

  render() {
    const gifElements = this.props.gifs.map((each) => {
      const { url, images } = each;
      return <img key={url} src={images.downsized.url} />;
    });

    return (
      <div className="pageNotFound">
        <h1>NOT FOUND</h1>

        <Button onClick={() => {this.handleGetJSON()}}>
          Clicking this button will get JSON randomly from Giphy as a test.
        </Button>

        {gifElements}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifs: state.rootReducer.gifs
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
)(NotFound);
