import React from 'react';
import './card-list.component.css';

export const CardList = props => (
  <div className='card-list'>
    {props.profiles.map(profile => (
      <h1 key={profile.id}> {profile.name} </h1>
    ))}
  </div>
);