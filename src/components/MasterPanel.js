import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getVotes,
  getSprint
} from '../store/actions';

class MasterPanel extends Component {

  componentDidMount () {
    this.props.getVotes();
    this.props.getSprint();
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
    const { voteReducer: { data }, voters, sprintName } = this.props;
    const stillVoting = data && data.length < voters;

    const messageText = stillVoting
      ? 'You can not end voting till each teammate voted.'
      : 'Please discuss and finalize the score !';

    return (
      <div className="master-panel">
        <span className="master-panel__title">Scrum Master Panel</span>
        <div className="master-panel__content">
          <div className="master-panel__row-container">
            <div className="master-panel__row">{`${sprintName} is active.`}</div>
            { this.renderVoters() }
          </div>
          <button
            className="master-panel__button"
            onClick={ () => console.log('object') }
            disabled={ stillVoting }
            >
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
