import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryInfoForm from './StoryInfoForm';
import Story from './Story';

class MasterPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
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

    const renderStories = () => {
      return storyData.data.map((story, index) => <Story
        key={ index }
        title={ story.title }
        description={ story.description }
        size={ story.size }
        showCards={ false }
        />)
    };

    return (
      <>
        <StoryInfoForm
          title={ this.state.title }
          description={ this.state.description }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }/>

          { renderStories() }
      </>
    );
  }
};

MasterPage.propTypes = {
  storyData: PropTypes.object,
  point: PropTypes.number
}

export default MasterPage;