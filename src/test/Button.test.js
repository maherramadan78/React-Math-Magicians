import { screen, render } from '@testing-library/react';
import Button from '../components/btn';

describe('Tests for the button component', () => {
  test('button should be rendered correctly', () => {
    render(
      <Button
        content=""
        setTotal={() => {}}
        setValue={() => {}}
        totalObj={{}}
      />,
    );
    expect(screen.getByRole('button')).toMatchInlineSnapshot(`
<button
  class="btn  gray"
  type="button"
/>
`);
  });
});
