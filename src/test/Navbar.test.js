import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('tests for Navbar component', () => {
  test('it should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByTestId('nav')).toMatchInlineSnapshot(`
<nav
  class="nav"
  data-testid="nav"
>
  <h1
    class="h1Nav"
  >
    Math Magicians
  </h1>
  <ul>
    <li>
      <a
        aria-current="page"
        class="active"
        href="/"
      >
        Home
      </a>
    </li>
    <li>
      <a
        class=""
        href="/Calculator"
      >
        Calculator
      </a>
    </li>
    <li>
      <a
        class=""
        href="/Quote"
      >
        Quote
      </a>
    </li>
  </ul>
</nav>
`);
  });
});
