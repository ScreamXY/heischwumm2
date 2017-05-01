import { Heischwumm2Page } from './app.po';

describe('heischwumm2 App', () => {
  let page: Heischwumm2Page;

  beforeEach(() => {
    page = new Heischwumm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
