import { MyAngularProjectPage } from './app.po';

describe('my-angular-project App', () => {
  let page: MyAngularProjectPage;

  beforeEach(() => {
    page = new MyAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
