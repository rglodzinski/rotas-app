export const isLoggedIn = () => {
    console.log("loggedIn=", localStorage.getItem("loggedIn"));
    return localStorage.getItem("loggedIn") === "true";
};
