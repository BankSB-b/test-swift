import { test, expect } from '@playwright/test';

const BASE_URL = 'https://codenboxautomationlab.com/practice/';

test.describe('UI Example ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('Test 1: Select Radio 2', async ({ page }) => {
    await page.locator('input[value="radio2"]').check();

    await expect(page.locator('input[value="radio2"]')).toBeChecked();

  });

  test('Test 2: Dynamic Dropdown - Search "Thai" and Select "Thailand"', async ({ page }) => {
    const dynamicInput = page.locator('input#autocomplete');

    await dynamicInput.fill('Thai');
    await page.waitForTimeout(500);
    await page.locator('text=Thailand').first().click();

    await expect(dynamicInput).toHaveValue('Thailand');
  });
  
  test('Test 3: Static Dropdown - Select "API"', async ({ page }) => {
    const staticDropdown = page.locator('select#dropdown-class-example');

    await staticDropdown.selectOption({ label: 'API' });

    await expect(staticDropdown).toHaveValue('option3');
  });

  test('Test 4: Check Checkbox 1 and 3', async ({ page }) => {
    const checkbox1 = page.locator('#checkBoxOption1');
    const checkbox3 = page.locator('#checkBoxOption3');
    
    await checkbox1.check();
    await checkbox3.check();
    
    await expect(checkbox1).toBeChecked();
    await expect(checkbox3).toBeChecked();
  }); 

  test('Test 5: Mouse Hover', async ({ page }) => {
    const hoverButton = page.locator('#mousehover');

    await hoverButton.hover();

    await expect(page.locator('text=Top')).toBeVisible(); 
    await expect(page.locator('text=Reload')).toBeVisible(); 
  });
});
