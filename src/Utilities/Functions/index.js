export const saveToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token", "no-token");

export const clearLocalStorage = () => localStorage.clear();

export const joinQueryStringsToUrl = (url, queryStrings) => {

    let newUrl = new URL(url);

    Object.keys(queryStrings).forEach(key => {

        // if (typeof (queryStrings[key]) === "object") {
        //     newUrl.searchParams.append(key, queryStrings[key].map(value => `${value},`));
        // }
        // else newUrl.searchParams.append(key, queryStrings[key]);

        if (typeof (queryStrings[key]) === "object") {
            newUrl.searchParams.append(key, [...queryStrings[key]]);
        }
        else newUrl.searchParams.append(key, queryStrings[key]);
    });

    console.log(newUrl)
    return newUrl;
};
