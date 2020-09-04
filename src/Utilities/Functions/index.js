export const saveToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token", "no-token");

export const clearLocalStorage = () => localStorage.clear();

/* joins url with params (key:value) */
export const joinQueryStringsToUrl = (url, queryStrings) => {

    let newUrl = new URL(url);

    Object.keys(queryStrings).forEach(key => {

        if (typeof (queryStrings[key]) === "object") {
            newUrl.searchParams.append(key, [...queryStrings[key]]);
        }
        else newUrl.searchParams.append(key, queryStrings[key]);
    });

    return newUrl;
};

/* Decoding text from api because of special characters */
export const decodeHtml = (text) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}