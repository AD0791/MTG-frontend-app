import {render, screen} from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('Get the role heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1 })        // the <h1> only
  //screen.getByRole('heading', { name: /get started/i })  // by its accessible name
  expect(headingElement).toBeInTheDocument();
});
