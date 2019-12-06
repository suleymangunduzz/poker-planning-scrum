import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStories } from '../store/actions';

class StoryList extends Component {

  componentDidMount () {
    const { getStories } = this.props;

    getStories();
    this.interval = setInterval(() => getStories(), 2000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    const { storyReducer: { data } } = this.props;

    const renderStories = () => {
      return data && data.length && data.map((story, index) => {
        return (
          <div key={ index } className="story-list__row">
            <div className="story-list__row-title">{ story.name }</div>
            <div className="story-list__row-title">{ story.point }</div>
            <div className="story-list__row-title">{ story.status }</div>
          </div>
        );
      });
    };
  
    return (
      <div className="story-list">
        <span className="story-list__title">Story List</span>
        <div className="story-list__content">      
          <div className="story-list__row story-list__row--header">
            <div className="story-list__row-title">Story</div>
            <div className="story-list__row-title">Story Point</div>
            <div className="story-list__row-title">Status</div>
          </div>
          { renderStories() }
        </div>
      </div>
    );
  }
}

StoryList.propTypes = {
  storyReducer: PropTypes.object,
  getStories: PropTypes.func
};

const mapStateToProps = state => ({
  storyReducer: state.storyReducer
});

export default connect(mapStateToProps, {
    getStories
})(StoryList);
