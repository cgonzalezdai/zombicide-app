import { ZombicideAppPage } from './app.po';

describe('zombicide-app App', function() {
  let page: ZombicideAppPage;

  beforeEach(() => {
    page = new ZombicideAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
