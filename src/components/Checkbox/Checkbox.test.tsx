import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render label', () => {
    render(<Checkbox label="test label" />);
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  it('should render input checkbox', () => {
    render(<Checkbox label="test" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should call onChange with true when checked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="test" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('should call onChange with false when unchecked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="test" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    await user.click(checkbox);
    expect(onChange).toHaveBeenLastCalledWith(false);
  });

  it('should apply required attribute', () => {
    render(<Checkbox label="test" required />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });
});
