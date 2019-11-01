import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  render(<App />);
});

test('renders the h1 title', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/Women's World Cup Searches/i);
  expect(element).toBeInTheDocument();
});