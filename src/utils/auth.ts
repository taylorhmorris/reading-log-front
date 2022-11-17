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
  login(token: string, user_id: number) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_id', user_id.toString());
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_id');
  }
}

export default new AuthService();
