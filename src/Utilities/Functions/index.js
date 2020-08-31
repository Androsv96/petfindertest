export const saveToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token", "no-token");

export const clearLocalStorage = () => localStorage.clear();

export const joinQueryStringsToUrl = (url, queryStrings) => {
    let newUrl = new URL(url);
    Object.keys(queryStrings).forEach(key => newUrl.searchParams.append(key, queryStrings[key]));
    return newUrl;
};
