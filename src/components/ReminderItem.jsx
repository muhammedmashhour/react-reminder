import React from 'react';

import moment from 'moment';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px 2px #e8e8e8;
  padding: .8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .8rem 0;
`;

const ReminderHeader = styled.h5`
  color: #e91e63;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0 0 .5rem;
`;

const DeleteReminder = styled.button`
  background: none;
  border: none;
  color: #e91e63;
  cursor: pointer;
`;

export default function ReminderItem({ reminder, removeReminder }) {
  return (
    <Container key={reminder.id} style={{"display": "flex", "justifyContent": "space-between"}}>
      <div>
        <ReminderHeader>{reminder.text}</ReminderHeader>
        <span>{moment(new Date(reminder.date)).fromNow()}</span>
      </div>
      <DeleteReminder type="button" onClick={removeReminder}>
        <i className="far fa-trash-alt"></i>
      </DeleteReminder>
    </Container>
  )
}
