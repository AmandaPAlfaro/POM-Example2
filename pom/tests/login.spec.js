import {test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/login-page');

test.only('User must be logged in successfully.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm('standard_user', 'secret_sauce')
})