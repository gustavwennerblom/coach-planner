export const isBrowser = () => typeof window !== undefined;

export const getUser = (): firebase.User => {
  const storedUser = window.localStorage.getItem('gatsbyUser');
  return isBrowser() && storedUser ? JSON.parse(storedUser) : null;
};

export const setUser = (user: firebase.User) => {
  return window.localStorage.setItem('gatsbyUser', JSON.stringify(user));
};

export const handleLogin = () => console.log('handleLogin not yet implemented');

export const isLoggedIn = () => {
  const user = getUser();
  return !!user;
};

export const logout = (callback: Function) => {
  setUser(null);
  callback();
};
