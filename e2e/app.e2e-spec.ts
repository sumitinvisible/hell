import { HellPage } from './app.po';

describe('hell App', function() {
  let page: HellPage;

  beforeEach(() => {
    page = new HellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
