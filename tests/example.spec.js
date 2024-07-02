import { test, expect } from '@playwright/test';

test('check valid auth', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await expect(page).toHaveURL('http://localhost:5173/login');
  await page.fill('input[name="email"]', 'StepanUA@mail.com');
  await page.fill('input[name="password"]', 'StepanUA@mail.com');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('http://localhost:5173/');
  await page.waitForTimeout(2000);
  await expect(page.locator('text=Hello there')).toBeVisible();
});

test('check add todo is Available', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.fill('input[name="email"]', 'StepanUA@mail.com');
  await page.fill('input[name="password"]', 'StepanUA@mail.com');
  await page.click('button[type="submit"]');
  await page.locator('text=Todos').click();
  await page.fill('input[name="todo"]', 'playwright test');
  await page.waitForTimeout(2000);
  await page.locator('text=Add').click();
  await page.waitForTimeout(2000);
});

test.only('check Rozetka', async ({ page }) => {
  await page.goto('https://rozetka.com.ua/ua/');
  await page.getByRole('link', { name: 'Ноутбуки та комп’ютери' }).click();
  await page.waitForTimeout(2000);
});
