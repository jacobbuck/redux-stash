import { REHYDRATE } from './actionTypes';
import createStash from './createStash';
import createStashMiddleware from './createStashMiddleware';
import rehydrateStore from './rehydrateStore';
// import AsyncStorage from './storage/AsyncStorage';
import CookieStorage from './storage/CookieStorage';
import LocalStorage from './storage/LocalStorage';
import SessionStorage from './storage/SessionStorage';
import Storage from './storage/Storage';

export {
  REHYDRATE,
  createStash,
  createStashMiddleware,
  rehydrateStore,
  // AsyncStorage,
  CookieStorage,
  LocalStorage,
  SessionStorage,
  Storage,
};
