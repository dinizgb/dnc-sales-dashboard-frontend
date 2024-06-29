import Cookies from 'js-cookie'

/**
 * Handles application logout
 */
export function logout() {
  if (confirm('Deseja seguir com o logout?') === true) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
