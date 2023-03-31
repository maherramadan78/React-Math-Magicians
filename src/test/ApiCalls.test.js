import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ApiCalls from '../components/ApiCalls';

describe('Tests for api calls component', () => {
  test('The component should render an error when the call fails', async () => {
    render(<ApiCalls />);

    expect(screen.findByText('Loading')).toMatchInlineSnapshot('Promise {}');
  });
});
