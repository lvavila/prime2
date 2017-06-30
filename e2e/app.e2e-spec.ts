import { Prime2Page } from './app.po';

describe('prime2 App', () => {
  let page: Prime2Page;

  beforeEach(() => {
    page = new Prime2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
