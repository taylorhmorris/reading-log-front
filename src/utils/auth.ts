import decode from 'jwt-decode';

class AuthService {
  loggedIn(token: string) {
    return !!token && !this.isTokenExpired(token);
  }
  isTokenExpired(token: string) {
    try {
      const decoded: any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  login(token: string) {
    localStorage.setItem('id_token', token);
  }
  logout() {
    localStorage.removeItem('id_token');
  }
}

export default new AuthService();
