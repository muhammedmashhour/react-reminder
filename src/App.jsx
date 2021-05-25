import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import { addReminder, removeReminder, crearAllReminders } from './actions/index';

class App extends Component {
  state = {
    text: '',
    date: '',
  };

  render() {
    return (
      <section className="reminder-app">
        <h1>what i will do ?</h1>
        <form>
          <input onChange={(e) => this.setState({
            text: e.target.value,
          })} type="text" />
          <input onChange={(e) => this.setState({
            date: e.target.value,
          })} type="datetime-local" />
          <button onClick={() => this.props.addReminder(this.state.text, this.state.date)} type="button">add</button>
          <button onClick={this.props.crearAllReminders} type="button">clear all</button>
        </form>
        <div className="container">
          {this.props.reminders ? this.props.reminders.map(el => (
            <div key={el.id} style={{"display": "flex", "justifyContent": "space-between"}}>
              <div>
                <h5>{el.text}</h5>
                <span>{moment(new Date(el.date)).fromNow()}</span>
              </div>
              <span onClick={() => this.props.removeReminder(el.id)}>remove</span>
            </div>
          )) : <h1>No Reminders Found!</h1>}
        </div>
      </section>
    )
  }
}


export default connect(state => {
  return {
    reminders: state,
  }
}, {addReminder, removeReminder, crearAllReminders})(App);
