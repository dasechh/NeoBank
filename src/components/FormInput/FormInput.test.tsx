import { render, screen } from '@testing-library/react';
import { FormInput } from './FormInput';
import userEvent from '@testing-library/user-event';

describe('FormInput', () => {
  test('Renders label', () => {
    render(<FormInput label="meow" />);
    screen.getByText('meow');
  });

  test('Renders label and star when required', () => {
    render(<FormInput label="meow" required />);
    screen.getByText('meow');
    screen.getByText('*');
  });

  test('Renders text placeholder', () => {
    render(<FormInput placeholder="meow" />);
    screen.getByPlaceholderText('meow');
  });

  test('Renders number placeholder', () => {
    render(<FormInput placeholder="meow" type="number" />);
    screen.getByPlaceholderText('meow');
  });

  test('Renders date placeholder', () => {
    render(<FormInput placeholder="meow" type="date" />);
    screen.getByPlaceholderText('meow');
  });

  test('Calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FormInput placeholder="meow" onChange={onChange} />);
    await user.type(screen.getByPlaceholderText('meow'), 'abc');
    expect(onChange).toHaveBeenCalled();
  });

  test('Keeps only numbers in number input', async () => {
    const user = userEvent.setup();
    render(<FormInput type="number" placeholder="Number" />);
    const input = screen.getByPlaceholderText('Number') as HTMLInputElement;
    await user.type(input, '12abc34');
    expect(input.value).toBe('1234');
  });

  test('Shows error text', () => {
    render(<FormInput errorText="meow" />);
    expect(screen.getByText('meow')).toBeInTheDocument();
  });

  test('Shows icon when valid', () => {
    render(<FormInput valid={true} />);
    const icon = screen.getByAltText('');
    expect(icon).toBeInTheDocument();
  });

  test('Shows icon when invalid', () => {
    render(<FormInput valid={false} />);
    const icon = screen.getByAltText('');
    expect(icon).toBeInTheDocument();
  });

  test('Formats number currency on display', () => {
    render(<FormInput type="number" value={1000000} />);
    expect(screen.getByText(/₽/)).toBeInTheDocument();
    expect(screen.getByText(/1\s?000\s?000/)).toBeInTheDocument();
  });

  test('Formats date display', () => {
    render(<FormInput type="date" value="2024-01-01" />);
    expect(screen.getByText('01-01-2024')).toBeInTheDocument();
  });

  test('Applies valid class', () => {
    render(<FormInput valid />);
    const input = screen.getByRole('textbox');
    expect(input.className).toMatch(/input_valid/);
  });

  test('Applies invalid class', () => {
    render(<FormInput valid={false} />);
    const input = screen.getByRole('textbox');
    expect(input.className).toMatch(/input_error/);
  });

  test('Doesnt show icon when uncheked', () => {
    render(<FormInput />);
    const icon = screen.queryByAltText('');
    expect(icon).not.toBeInTheDocument();
  });

  test('Date input calls showPicker on click', () => {
    const showPicker = vi.fn();
    Object.defineProperty(HTMLInputElement.prototype, 'showPicker', {
      value: showPicker,
      writable: true,
    });
    render(<FormInput type="date" placeholder="Date" />);
    const input = screen.getByPlaceholderText('Date');
    input.click();
    expect(showPicker).toHaveBeenCalled();
  });
});
