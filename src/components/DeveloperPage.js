import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeveloperPage extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    this.props.addPointToStory();
    // TODO: get the story list with addPointToStory action!
  }

  render () {
    const { storyData } = this.props;

    const renderStories = () => {
      return null;
    };

    return (
      <div className="developer">
        { renderStories() }
      </div>
    ); 
  }
}

DeveloperPage.propTypes = {
  storyData: PropTypes.object,
  addPointToStory: PropTypes.func
};

export default DeveloperPage;