import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
    it('renders correctly', () => {
        render(<Badge>Status</Badge>);
        const badge = screen.getByText('Status');
        expect(badge).toBeInTheDocument();
    });

    it('applies variant classes', () => {
        render(<Badge variant="success">Success</Badge>);
        const badge = screen.getByText('Success');
        expect(badge).toHaveClass('bg-[var(--success)]');
    });

    it('renders with default variant', () => {
        render(<Badge>Default</Badge>);
        const badge = screen.getByText('Default');
        expect(badge).toHaveClass('bg-[var(--card-bg)]');
    });
});
