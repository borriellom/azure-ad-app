import { AzureAdAppWebpackPage } from './app.po';

describe('azure-ad-app-webpack App', () => {
  let page: AzureAdAppWebpackPage;

  beforeEach(() => {
    page = new AzureAdAppWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
