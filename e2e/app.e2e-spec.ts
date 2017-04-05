import { NeeduClientPage } from './app.po';

describe('needu-client App', function() {
  let page: NeeduClientPage;

  beforeEach(() => {
    page = new NeeduClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
