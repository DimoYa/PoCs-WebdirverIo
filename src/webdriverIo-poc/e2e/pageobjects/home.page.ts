import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get welcomeElement () {
        return $('#welcome');
    }

    public open () {
        return super.open('');
    }
}

export default new HomePage();
