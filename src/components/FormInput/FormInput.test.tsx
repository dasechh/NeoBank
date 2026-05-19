import { render, screen } from '@testing-library/react';
import { FormInput } from './FormInput';
import userEvent from '@testing-library/user-event';

describe('FormInput', () => {
  it('should render label', () => {
    render(<FormInput label="Input label" />);
    screen.getByText('Input label');
  });

  it('should render label and star when required', () => {
    render(<FormInput label="Input label" required />);
    screen.getByText('Input label');
    screen.getByText('*');
  });

  it('should render text placeholder', () => {
    render(<FormInput placeholder="Input label" />);
    screen.getByPlaceholderText('Input label');
  });

  it('should render number placeholder', () => {
    render(<FormInput placeholder="Input placeholder" type="number" />);
    screen.getByPlaceholderText('Input placeholder');
  });

  it('should render date placeholder', () => {
    render(<FormInput placeholder="Input placeholder" type="date" />);
    screen.getByPlaceholderText('Input placeholder');
  });

  it('should call onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FormInput placeholder="Input placeholder" onChange={onChange} />);
    await user.type(screen.getByPlaceholderText('Input placeholder'), 'abc');
    expect(onChange).toHaveBeenCalled();
  });

  it('should keep only numbers in number input', async () => {
    const user = userEvent.setup();
    render(<FormInput type="number" placeholder="Number" />);
    const input = screen.getByPlaceholderText('Number') as HTMLInputElement;
    await user.type(input, '12abc34');
    expect(input.value).toBe('1234');
  });

  it('should show error text', () => {
    render(<FormInput errorText="Input error text" />);
    expect(screen.getByText('Input error text')).toBeInTheDocument();
  });

  it('should show icon when valid', () => {
    render(<FormInput valid={true} />);
    const icon = screen.getByAltText('');
    expect(icon).toBeInTheDocument();
  });

  it('should show icon when invalid', () => {
    render(<FormInput valid={false} />);
    const icon = screen.getByAltText('');
    expect(icon).toBeInTheDocument();
  });

  it('should format number currency on display', () => {
    render(<FormInput type="number" value={1000000} />);
    expect(screen.getByText(/₽/)).toBeInTheDocument();
    expect(screen.getByText(/1\s?000\s?000/)).toBeInTheDocument();
  });

  it('should format date display', () => {
    render(<FormInput type="date" value="2024-01-01" />);
    expect(screen.getByText('01-01-2024')).toBeInTheDocument();
  });

  it('should apply valid class', () => {
    render(<FormInput valid />);
    const input = screen.getByRole('textbox');
    expect(input.className).toMatch(/input_valid/);
  });

  it('should apply invalid class', () => {
    render(<FormInput valid={false} />);
    const input = screen.getByRole('textbox');
    expect(input.className).toMatch(/input_error/);
  });

  it("should'nt  show icon when uncheked", () => {
    render(<FormInput />);
    const icon = screen.queryByAltText('');
    expect(icon).not.toBeInTheDocument();
  });

  it("should call showPicker on click when it's type is date", () => {
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
