import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  test('Renders', () => {
    render(<Tooltip text="hello" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip).toBeInTheDocument();
  });

  test('Applies default class', () => {
    render(<Tooltip text="hello" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip.className).toMatch(/tooltip/);
  });

  test('Applies custom calss', () => {
    render(<Tooltip text="hello" className="meow" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip).toHaveClass('meow');
  });
});
