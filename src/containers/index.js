import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { simpleAction } from './../actions/simpleAction';


class App extends Component {
  testAction = () => {
    this.props.actions.simpleAction();
  }
  render() {
    return (
      <React.Fragment>
        <div>Inshorts News</div>
        <button type="button" onClick={this.testAction}>Test Redux Action</button>
        <pre>
          {JSON.stringify(this.props)}
        </pre>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    simpleAction,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);