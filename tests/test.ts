import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('project Au Lait (body')).toBeVisible();
});
