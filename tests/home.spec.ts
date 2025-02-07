import { test, expect } from '@playwright/test';

test.describe('Home', () => {
  test('Open homepage and verify title', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  });

  test('Click get started button button using CSS selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    await page.locator('#get-started').click();
  });
});
