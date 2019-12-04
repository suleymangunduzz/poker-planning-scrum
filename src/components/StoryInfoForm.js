import React from 'react';
import PropTypes from 'prop-types';

const StoryInfoForm = ({
  handleSubmit,
  handleChange,
  title,
  description
}) => {
  return (
    <form onSubmit={ (e) => handleSubmit(e) } className="info-form">
        <label className="info-form__label">
          Title:
          <input type="text" value={ title } onChange={ (e) => handleChange(e) } id="title" placeholder="Enter the title."/>
        </label>

        <label className="info-form__label">
          Description:
          <input type="text" value={description} onChange={ (e) => handleChange(e) } id="description" placeholder="Enter the description of story."/>
        </label>
        <input type="submit" value="Add New Story !" />
      </form>
  );
};

StoryInfoForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string
};

export default StoryInfoForm;