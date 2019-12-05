import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryList from './StoryList';
import ActiveStory from './ActiveStory';

class MasterPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  componentDidMount () {
    this.props.getStories();
  }

  handleChange = (event) => {
    const { target: { id, value } } = event;

    this.setState({
      [id]: value
    });
  }

  handleSubmit = (event) => {
    //TODO: add new story !

    event.preventDefault();
  }

  render () {
    const { storyData } = this.props;

    return (
      <div className="master__content">
        <StoryList storyList={ storyData } />
        <ActiveStory />
      </div>
    );
  }
}

MasterPage.propTypes = {
  storyData: PropTypes.object,
  getStories: PropTypes.func
}

export default MasterPage;