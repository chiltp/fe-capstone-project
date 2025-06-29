import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders copyright text', () => {
    render(<Footer />);

    // Check for the exact copyright text
    const copyrightText = screen.getByText(
      /© 2025 Little Lemon. All rights reserved./i
    );
    expect(copyrightText).toBeInTheDocument();

    // Verify it's inside a footer element
    expect(copyrightText.closest('footer')).toBeInTheDocument();
    expect(copyrightText.closest('footer')).toHaveClass('App-footer');
  });
});