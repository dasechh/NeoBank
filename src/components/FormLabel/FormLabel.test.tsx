import { render, screen } from '@testing-library/react';
import { FormLabel } from './FormLabel';

describe('FormLabel', () => {
  test('Renders label text', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  test('Renders label info', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  test('Applies sm gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="sm" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).toMatch(/sm/);
  });

  test('Applies md gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="md" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).toMatch(/md/);
  });

  test('Applies lg gap class', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" gapWith="lg" />);

    const heading = screen.getByRole('heading');

    const root = heading.parentElement;

    expect(root?.className).toMatch(/lg/);
  });

  test('Doesnt apply gap class when not provided', () => {
    render(<FormLabel labelText="Title" labelInfo="Step 1" />);
    const heading = screen.getByRole('heading');
    const root = heading.parentElement;
    expect(root?.className).not.toMatch(/sm|md|lg/);
  });
});
