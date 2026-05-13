import { test, expect } from '@playwright/test';

test('Inspect Dropdown Options', async ({ page }) => {
  await page.goto('https://codenboxautomationlab.com/practice/');

  // Get all options from the dropdown
  const dropdown = page.locator('select#dropdown-class-example');
  const options = dropdown.locator('option');

  console.log('Available options:');
  const optionTexts = await options.allTextContents();
  const optionValues = await options.all();

  for (let i = 0; i < optionTexts.length; i++) {
    const value = await optionValues[i].getAttribute('value');
    console.log(`Option ${i}: Text="${optionTexts[i]}", Value="${value}"`);
  }
});