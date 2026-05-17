import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  test('Renders title and description', () => {
    render(<Accordion title="Title" description="Description" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('Renders expand icon', () => {
    render(<Accordion title="Title" description="Description" />);
    const icon = screen.getByAltText('Open');
    expect(icon).toBeInTheDocument();
  });

  test('Accordion is closed by default', () => {
    render(<Accordion title="Title" description="Description" />);
    const details = screen.getByRole('group');
    expect(details).not.toHaveAttribute('open');
  });

  test('Opens accordion on click', async () => {
    const user = userEvent.setup();
    render(<Accordion title="Title" description="Description" />);
    const summary = screen.getByText('Title');
    await user.click(summary);
    const details = screen.getByRole('group');
    expect(details).toHaveAttribute('open');
  });

  test('Applies name attribute', () => {
    render(<Accordion title="Title" description="Description" name="test-group" />);
    const details = screen.getByRole('group');
    expect(details).toHaveAttribute('name', 'test-group');
  });
});
