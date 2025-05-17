import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Event Planner/i)).toBeInTheDocument();
});