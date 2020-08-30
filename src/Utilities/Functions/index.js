export const saveToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token", "no-token");

export const clearLocalStorage = () => localStorage.clear();
