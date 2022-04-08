import { environment } from '../../src/environments/environment';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     private readonly baseUrl = environment.baseUrl;

    public open (path: string) {
        return browser.url(this.baseUrl);
    }
}
