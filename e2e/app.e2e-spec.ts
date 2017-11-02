import { ConfigTestPage } from './app.po';

describe('config-test App', () => {
  let page: ConfigTestPage;

  beforeEach(() => {
    page = new ConfigTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
