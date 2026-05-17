import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('Renders label', () => {
    render(<Checkbox label="test label" />);
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  test('Renders input checkbox', () => {
    render(<Checkbox label="test" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('Calls onChange with true when checked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="test" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  test('Calls onChange with false when unchecked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="test" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    await user.click(checkbox);
    expect(onChange).toHaveBeenLastCalledWith(false);
  });

  test('Applies required attribute', () => {
    render(<Checkbox label="test" required />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });
});
