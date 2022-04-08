import HomePage from  '../pageobjects/home.page';

describe('Home page', () => {
    it('should display welcome msg', async () => {
        await HomePage.open();

        await expect(HomePage.welcomeElement).toBeExisting();
        await expect(HomePage.welcomeElement).toHaveTextContaining(
            'Welcome');
    });
});


