import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { FormSelect } from './FormSelect';

describe('FormSelect', () => {
  const options = [
    { id: 1, label: 'Option 1', value: '1' },
    { id: 2, label: 'Option 2', value: '2' },
  ];

  test('Renders label', () => {
    render(<FormSelect label="Select" options={options} />);
    expect(screen.getByText('Select')).toBeInTheDocument();
  });

  test('Renders required star', () => {
    render(<FormSelect label="Select" options={options} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('Renders options', () => {
    render(<FormSelect options={options} />);
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
  });

  test('Renders placeholder option', () => {
    render(<FormSelect options={options} placeholder="Choose" />);
    expect(screen.getByText('Choose')).toBeInTheDocument();
  });

  test('Calls onChange when selecting value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FormSelect options={options} onChange={onChange} />);
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '1');
    expect(onChange).toHaveBeenCalled();
  });

  test('Renders error text', () => {
    render(<FormSelect options={options} errorText="Error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('Applies required attribute', () => {
    render(<FormSelect options={options} required />);
    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
  });

  test('Select works correctly', async () => {
    const user = userEvent.setup();
    render(<FormSelect options={options} />);
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '2');
    expect(select).toHaveValue('2');
  });
});
