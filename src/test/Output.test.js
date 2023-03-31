import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Output from '../components/Output';

describe('tests for Navbar component', () => {
  test('Navbar should be rendered correctly', () => {
    render(<Output totalObj={{}} value="" />);
    expect(screen.getByTestId('output')).toMatchInlineSnapshot(`
<div
  class="result"
  data-testid="output"
>
  <span>
    0
  </span>
</div>
`);
  });
});
