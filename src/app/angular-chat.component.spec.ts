import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularChatAppComponent } from '../app/angular-chat.component';

beforeEachProviders(() => [AngularChatAppComponent]);

describe('App: AngularChat', () => {
  it('should create the app',
      inject([AngularChatAppComponent], (app: AngularChatAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-chat works!\'',
      inject([AngularChatAppComponent], (app: AngularChatAppComponent) => {
    expect(app.title).toEqual('angular-chat works!');
  }));
});
