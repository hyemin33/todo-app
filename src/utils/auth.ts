interface IAuth {
  setToken(token: string): void;
  getToken(): any;
}

const auth: IAuth = {
  setToken(token) {
    return localStorage.setItem('token', token);
  },
  getToken() {
    return localStorage.getItem('token');
  },
};
export default auth;
