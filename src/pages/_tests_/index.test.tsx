/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../index';

it('teste', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Teste page')).toBeTruthy();
});
