import { App } from './app';

describe('App', () => {
  let component: App;

  beforeEach(() => {
    component = new App();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('Heimdal Portal - Guardian of LARP Realms');
  });
});