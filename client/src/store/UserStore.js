import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._email = '';
    makeAutoObservable(this);

    this.loadUser();
  }

  setIsAuth(bool) {
    this._isAuth = bool;
    // localStorage.setItem('isAuth', bool);
  }

  setUser(user) {
    this._user = user;
    // localStorage.setItem('user', JSON.stringify(user));
  }
  
  setEmail(email) {
    this._email = email
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get email() {
    return this._email
  }

  loadUser() {
    const isAuth = localStorage.getItem('isAuth') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));
    if (isAuth && user) {
      this._isAuth = isAuth;
      this._user = user;
    }
  }
}