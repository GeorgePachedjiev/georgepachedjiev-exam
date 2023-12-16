const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://georgepachedjiev-exam.onrender.com/shopping-list');
    const list = await page.$('d1');
    expect(list).toBeFalsy();
  });
  