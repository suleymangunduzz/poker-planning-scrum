import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getVotes,
  getSprint
} from '../store/actions';

class MasterPanel extends Component {

  constructor (props) {
    super(props);

    this.state = {
      finalScore: '',
      showFinalInput: false
    };
  }

  componentDidMount () {
    this.props.getVotes();
    this.props.getSprint();
  }

  handleChange = (event) => {
    const { id, value } = event.target;

    this.setState({
      [id]: value
    });
  }

  handleSubmit = () => {

    // TODO: finalize the score of active story

    this.setState({
      showFinalInput: true
    })
  }

  renderVoters = () => {
    const { voteReducer: { data }, voters } = this.props;
    let content = [];

    if (Array.isArray(data)) {
      for (let i = 0; i < voters; i++) {
        content.push(
          <div key={i} className="master-panel__row master-panel__row--divided">
            <span>{ i === voters - 1 ? 'Scrum Master' : `Voter ${i+1}` }</span>
            <span>:</span>
            <span>{data[i] ? data[i].point : 'Not Voted'}</span>
          </div>)
      }
    }
    return content;
  };

  render () {
    const { finalScore, showFinalInput } = this.state;
    const { voteReducer: { data }, voters, sprintName } = this.props;
    const stillVoting = (data && data.length < voters) || !sprintName;

    const messageText = stillVoting
      ? 'You can not end voting till each teammate voted.'
      : 'Please discuss and finalize the score !';

    const renderTxtInput = () => {
      return !stillVoting && showFinalInput ? (
        <div className="master-panel__finalize">
          <label>Final Score</label>
            <input type="number" value={ finalScore } id="finalScore" onChange={ (e) => this.handleChange(e) } />
        </div>
      ) : null;
    };

    return (
      <div className="master-panel">
        <span className="master-panel__title">Scrum Master Panel</span>
        <div className="master-panel__content">
          <div className="master-panel__row-container">
            <div className="master-panel__row">{sprintName ? `${sprintName} is active.`: 'There is no active sprint!'}</div>
            { this.renderVoters() }
          </div>
          { renderTxtInput() }
          <button
            className="master-panel__button"
            onClick={ () => this.handleSubmit() }
            disabled={ stillVoting }>
              {`End Voting For ${sprintName}`}
          </button>
          <div className="master-panel__message">{messageText}</div>
        </div>
      </div>
    );
  }
}

MasterPanel.propTypes = {
  sprintName: PropTypes.string,
  voteReducer: PropTypes.object,
  getVotes: PropTypes.func,
  getSprint: PropTypes.func
};

const mapStateToProps = state => ({
  voteReducer: state.voteReducer,
  voters: state.sprintReducer.data.voters,
  sprintName: state.sprintReducer.data.name
});

export default connect(mapStateToProps, {
    getVotes,
    getSprint
})(MasterPanel);
