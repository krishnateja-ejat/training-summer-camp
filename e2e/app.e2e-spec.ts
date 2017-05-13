import { TrainingSummerCampPage } from './app.po';

describe('training-summer-camp App', () => {
  let page: TrainingSummerCampPage;

  beforeEach(() => {
    page = new TrainingSummerCampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
