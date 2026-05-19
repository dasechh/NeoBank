import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should be role accurate', () => {
    render(<Button></Button>);
    screen.getByRole('button');
  });

  it('should render text', () => {
    render(<Button>I am the children</Button>);
    expect(screen.getByText('I am the children')).toBeInTheDocument();
  });

  it('should apply className', () => {
    render(<Button className="testClass" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('testClass');
  });

  it('should apply variant', () => {
    render(<Button variant="icon" />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/btn_icon/);
  });

  it('should apply size', () => {
    render(<Button size="md" />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/btn_md/);
  });

  it('can be disabled', () => {
    render(<Button disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.className).toMatch(/btn_disabled/);
  });

  it('should call onClick', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should'nt call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick} disabled />);
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should pass native button props', () => {
    render(<Button type="submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
