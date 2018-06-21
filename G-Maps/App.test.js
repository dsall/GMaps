import React from 'react';
import App from './App';
import MaterialBottomTabNavigator from './Components/Nav_Bar/navbar'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
