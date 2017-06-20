import { ReduxBookPage } from './app.po';

describe('redux-book App', () => {
  let page: ReduxBookPage;

  beforeEach(() => {
    page = new ReduxBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
