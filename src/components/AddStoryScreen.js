import React, { Component } from 'react';

class AddStoryScreen extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      voters: '',
      list: []
    };
  }
  
  render () {
    const { name, voters, list } = this.state;

    return (
      <div className="add-story__container">

        <div className="add-story__inputs">
          <div className="add-story__label">Session Name : </div>
          <input type="text" value={ name } onChange={ () => console.log('input') } id="name" placeholder="Enter the title."/>
          <span />
          <div className="add-story__label">Number Of Voters :</div>
          <input type="text" value={ voters } onChange={ () => console.log('input') } id="voters" placeholder="Enter the voters."/>
        </div>

        <div className="add-stoy__info-message">
          Paste your story list. (Each line will be conterted as a story.)
        </div>

        <textarea className="add-story__text-area" value={list} onChange={() => console.log('asdasd')} />

      </div>
    );
  }
};

export default AddStoryScreen;
