import { PiechartcollectPage } from './app.po';

describe('piechartcollect App', () => {
  let page: PiechartcollectPage;

  beforeEach(() => {
    page = new PiechartcollectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
