const { test, expect } = require('@playwright/test');

test('Greyt HR', async ({ page }) => {
  // Navigate to the greytHR page
  await page.goto('https://panorama.greythr.com/');
  
  // Fill in the username and password fields
  await page.locator('[name="username"]').fill('your-username');
  await page.locator('[placeholder="Password"]').fill('your-password');
  
  // Click on the login button
  await page.locator('[type="submit"]').click();

  // Click the "Sign In" button (role-based)
  await page.getByRole('button', { name: /Sign/ }).click();
  
  // Click the first toggle
  await page.locator('[class="toggle"]').first().click();

  // Click on the second dropdown item
  await page.locator('[class="dropdown-item"]').nth(1).click();
  
  // Interact with the shadow DOM element - gt-button
  const shadowHost = await page.locator('gt-button'); // Locate the shadow host element
  const shadowRoot = await shadowHost.evaluateHandle(el => el.shadowRoot); // Access shadow root
  
  // Once inside the shadow DOM, find the button inside it and click it
  const shadowButton = await shadowRoot.evaluateHandle(root => root.querySelector('button.btn.btn-primary.btn-medium'));
  await shadowButton.click();
});
