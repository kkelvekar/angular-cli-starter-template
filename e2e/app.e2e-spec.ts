import { AngularCliStarterTemplatePage } from './app.po';

describe('angular-cli-starter-template App', () => {
  let page: AngularCliStarterTemplatePage;

  beforeEach(() => {
    page = new AngularCliStarterTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
