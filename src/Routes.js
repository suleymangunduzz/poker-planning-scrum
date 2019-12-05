import React from 'react';
import HomePageLayout from './components/HomePageLayout';

export default [
  {
    path: '/:pageName?',
    exact: true,
    render: props => <HomePageLayout { ...props } />
  }
];
