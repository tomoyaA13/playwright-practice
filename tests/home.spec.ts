import { expect, test } from '@playwright/test';

test.describe('Home', () => {
  test('Open homepage and verify title', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  });

  // 23. CSS Selector
  test('Click get started button button using CSS selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    await page.locator('#get-started').click();

    await expect(page).toHaveURL(/.*#get-started/);
  });

  // 24. Text Selector
  test('verifying heading text is visible using text selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    const headingText = await page.locator('text=Think different. Make different.');

    await expect(headingText).toBeVisible();
  });
});
