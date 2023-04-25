interface IAuth {
  setToken(token: string): void;
  getToken(): any;
  clearAppStorage(): any;
}

const auth: IAuth = {
  setToken(token) {
    return localStorage.setItem('token', token);
  },
  getToken() {
    return localStorage.getItem('token');
  },
  clearAppStorage() {
    return localStorage.clear();
  },
};
export default auth;
