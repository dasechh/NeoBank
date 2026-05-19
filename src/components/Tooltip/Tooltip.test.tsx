import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('should render', () => {
    render(<Tooltip text="hello" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip).toBeInTheDocument();
  });

  it('should apply default class', () => {
    render(<Tooltip text="hello" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip.className).toMatch(/tooltip/);
  });

  it('should apply custom class', () => {
    render(<Tooltip text="hello" className="Tooltip classname" />);
    const tooltip = screen.getByText('hello');
    expect(tooltip).toHaveClass('Tooltip classname');
  });
});
