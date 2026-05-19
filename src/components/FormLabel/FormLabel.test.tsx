import { render, screen } from '@testing-library/react';
import { FormLabel } from './FormLabel';

describe('FormLabel', () => {
  it('should render label text', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  it('should render label info', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('should apply sm gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="sm" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).toMatch(/sm/);
  });

  it('should apply md gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="md" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).toMatch(/md/);
  });

  it('should apply lg gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="lg" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).toMatch(/lg/);
  });

  it("should'nt apply gap class when not provided", () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).not.toMatch(/sm|md|lg/);
  });
});
