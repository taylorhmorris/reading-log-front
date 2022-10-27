import decode from 'jwt-decode';

export type AuthResponse = {
  access_token: string;
  id: number;
  isAdmin: boolean;
};

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
  login(res: AuthResponse) {
    localStorage.setItem('id_token', res.access_token);
    localStorage.setItem('user_id', res.id.toString());
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_id');
  }
}

export default new AuthService();
