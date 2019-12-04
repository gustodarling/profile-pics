import React from 'react';
import { Card } from '../card/card.component';
import './card-list.component.css';

export const CardList = props => (
  <div className="card-list">
    {props.profiles.map(profile => (
      <Card key={profile.id} profile={profile} />
    ))}
  </div>
);
