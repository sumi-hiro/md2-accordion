import { MdAccordionPage } from './app.po';

describe('md-accordion App', () => {
  let page: MdAccordionPage;

  beforeEach(() => {
    page = new MdAccordionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
