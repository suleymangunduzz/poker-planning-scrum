import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MASTER } from '../store/constants';
class AddStoryScreen extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      voters: '',
      list: ''
    };
  }

  handleChange = (event) => {
    const { target: { id, value } } = event;

    this.setState({
      [id]: id === "voters" ? value.replace(/[^0-9]/g, '') : value
    });
  }

  handleSubmit = () => {
    const { name, voters, list } = this.state;
    const { createSprint, history } = this.props;
    const filteredList = list.split('\n').filter(story => story);
    
    createSprint({name, voters, list: filteredList});
    history.push(`/${MASTER}`);
  }
  
  render () {
    const { name, voters, list } = this.state;

    const isButtonDisabled = name === '' || voters === '' || !list.length;

    return (
      <div className="add-story__container">
        <div className="add-story__inputs">
          <div className="add-story__label">Session Name : </div>
          <input type="text" value={ name } onChange={ (e) => this.handleChange(e) } id="name" placeholder="Enter the title." maxLength="200"/>
          <span />
          <div className="add-story__label">Number Of Voters :</div>
          <input type="number" value={ voters } onChange={ (e) => this.handleChange(e) } id="voters" placeholder="Enter the voters."/>
        </div>

        <div className="add-stoy__info-message">
          Paste your story list. (Each line will be conterted as a story.)
        </div>

        <textarea className="add-story__text-area" value={list} onChange={ (e) => this.handleChange(e) } id="list"/>
        
        <button className="add-story__button" onClick={ () => this.handleSubmit() } disabled={ isButtonDisabled }>
          Start Session
        </button>
      </div>
    );
  }
};

AddStoryScreen.propTypes = {
  createSprint: PropTypes.func,
  history: PropTypes.object
};

export default AddStoryScreen;
