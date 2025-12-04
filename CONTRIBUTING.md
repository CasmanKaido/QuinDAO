# Contributing to QuinDAO

Thank you for your interest in contributing to QuinDAO! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Use the bug report template
3. Include:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details

### Suggesting Features

1. Check if the feature has been suggested
2. Use the feature request template
3. Explain the use case
4. Describe the proposed solution

### Pull Requests

1. **Fork the repository**
2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm test
   npm run test:e2e
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add feature: description"
   ```
   Follow conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Maintenance

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Use the PR template
   - Link related issues
   - Describe your changes
   - Add screenshots for UI changes

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/QuinDAO.git
cd QuinDAO

# Add upstream remote
git remote add upstream https://github.com/CasmanKaido/QuinDAO.git

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local
# Add your NEXT_PUBLIC_REOWN_PROJECT_ID

# Start development server
npm run dev
```

## Code Style

### TypeScript
- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type

### React
- Use functional components
- Use hooks appropriately
- Keep components focused and reusable

### Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Files: camelCase (`useWallet.ts`)
- Constants: UPPER_SNAKE_CASE (`MAX_VOTES`)

### File Organization
```
src/
├── app/           # Pages
├── components/    # React components
├── hooks/         # Custom hooks
├── utils/         # Utilities
├── types/         # TypeScript types
└── services/      # API services
```

## Testing

### Unit Tests
```bash
npm test
```
- Test components in `__tests__` directories
- Use React Testing Library
- Aim for >80% coverage

### E2E Tests
```bash
npm run test:e2e
```
- Test critical user flows
- Use Playwright
- Test on multiple browsers

## Documentation

- Update README.md for user-facing changes
- Update DEVELOPMENT.md for developer changes
- Add JSDoc comments for complex functions
- Update TypeScript types

## Review Process

1. Automated checks must pass
2. At least one maintainer approval required
3. All comments must be resolved
4. No merge conflicts

## Questions?

- Open a GitHub Discussion
- Join our Discord (if available)
- Email: cassidyladden1@gmail.com

Thank you for contributing! 🎉
