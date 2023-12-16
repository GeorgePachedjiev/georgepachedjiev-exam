const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://georgepachedjiev-exam.onrender.com/add-to-shopping-list');
    const form = await page.$('input');
    expect(form).toBeFalsy();
  });
  