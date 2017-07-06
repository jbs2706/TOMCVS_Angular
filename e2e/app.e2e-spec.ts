import { TOMCVSPage } from './app.po';

describe('tomcvs App', () => {
  let page: TOMCVSPage;

  beforeEach(() => {
    page = new TOMCVSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
