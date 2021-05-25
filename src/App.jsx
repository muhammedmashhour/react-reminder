import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, removeReminder, crearAllReminders } from './actions/index';
import ReminderItem from './components/ReminderItem';
import styled from 'styled-components';


const Container = styled.section`
  width: 500px;
  margin: 1rem auto;
  
`;

const Head = styled.h1`
  color: #e91e63;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

const Input = styled.input`
  border: none;
  border: 1px solid #ddd;
  width: 100%;
  padding: .8rem 1rem;
  font-size: 1rem;
  text-transform: capitalize;
  margin: .5rem 0;
  border-radius: .2rem;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: #ddd;
  padding: .5rem 1rem;
  background-color: #e91e63;
  border-radius: .3rem;
  border: none;
  width: 100%;
  margin: .5rem 0;
  cursor: pointer;
  font-size: 1rem;
  text-transform: capitalize;
`;

class App extends Component {
  state = {
    text: '',
    date: '',
  };

  render() {
    return (
      <Container>
        <Head>what will i do ?</Head>
        <form>
          <Input onChange={(e) => this.setState({
            text: e.target.value,
          })} type="text" placeholder="type your task ..." />
          <Input onChange={(e) => this.setState({
            date: e.target.value,
          })} type="datetime-local" />
          <Button onClick={() => this.props.addReminder(this.state.text, this.state.date)} type="button">add</Button>
          <Button onClick={this.props.crearAllReminders} type="button">clear all</Button>
        </form>
        <div className="container">
          {this.props.reminders ? this.props.reminders.map(el => (
            <ReminderItem reminder={el} removeReminder={() => this.props.removeReminder(el.id)} />
          )) : <h1 style={{textAlign: 'center'}}>No Reminders Found!</h1>}
        </div>
      </Container>
    )
  }
}


export default connect(state => {
  return {
    reminders: state,
  }
}, {addReminder, removeReminder, crearAllReminders})(App);
