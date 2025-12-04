import { test, expect } from '@playwright/test';

test('homepage has title and navigation', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/QuinDAO/);

    // Check navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check hero section
    await expect(page.getByText('Watch Party Voting')).toBeVisible();
});

test('can navigate to proposals', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Proposals');
    await expect(page).toHaveURL('/');
});

test('can navigate to analytics', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Analytics');
    await expect(page).toHaveURL('/analytics');
    await expect(page.getByText('Analytics Dashboard')).toBeVisible();
});
