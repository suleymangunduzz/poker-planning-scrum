import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeveloperPage from './components/DeveloperPage';
import MasterPage from './components/MasterPage';
import { connect } from 'react-redux';
import {
  addPointToStory,
  getStories
} from '../src/store/actions';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activePage: null
    };
  }

  componentDidMount () {
    this.props.getStories();
  }

  setActivePage = pageName => {
    this.setState({
      activePage: pageName
    })  
  }

  render() {
    const { activePage } = this.state;
    const { storyReducer } = this.props;

    const renderPage = () => {
      switch (activePage) {
        case 'developer':
          return <DeveloperPage
            addPointToStory={ this.props.addPointToStory }
            storyData={ storyReducer } />;
        case 'master':
          return <MasterPage storyData={ storyReducer }/>;
        default:
          return <div className="app app__message">{'Make Your Role Selection Please ...'}</div>;
      }
    };

    return (
      <>
      <div className="app">
        <button className="user-button" onClick={ () => this.setActivePage('developer') }>I am a Developer.</button>
        <button className="user-button" onClick={ () => this.setActivePage('master') } >I am Scrum Master.</button>
      </div>
      { renderPage() }
      </>
    );
  }
}

App.propTypes = {
  getStories: PropTypes.func,
  addPointToStory: PropTypes.func
};

const mapStateToProps = state => ({
  storyReducer: state.storyReducer
});

export default connect(mapStateToProps, {
  addPointToStory,
  getStories
})(App);