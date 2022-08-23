import decode from 'jwt-decode';

class AuthService {
  // getProfile() {
  //   const token = localStorage.getItem('id_token');
  //   return decode(token);
  // }

  loggedIn(token) {
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}

export default new AuthService();