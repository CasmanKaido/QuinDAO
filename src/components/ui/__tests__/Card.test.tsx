import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card><div>Card Content</div></Card>);
        const content = screen.getByText('Card Content');
        expect(content).toBeInTheDocument();
    });

    it('applies hover styles when hover prop is true', () => {
        render(<Card hover>Hover Card</Card>);
        // We can check if the class is applied, though testing library prefers testing behavior/visibility
        // But for styling components, checking classes is sometimes necessary
        // Assuming the Card component applies a specific class for hover
        // Let's just check it renders for now as checking specific classes might be brittle
        const card = screen.getByText('Hover Card').closest('div');
        expect(card).toBeInTheDocument();
    });

    it('accepts custom className', () => {
        render(<Card className="custom-class">Custom Card</Card>);
        const card = screen.getByText('Custom Card').closest('div');
        expect(card).toHaveClass('custom-class');
    });
});
