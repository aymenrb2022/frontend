const tokenFromLocalStorage = localStorage.getItem('user');

export const config = {
  headers: {
    "Authorization": `Bearer ${tokenFromLocalStorage}`,
    "Accept": 'application/json',
  }
};
