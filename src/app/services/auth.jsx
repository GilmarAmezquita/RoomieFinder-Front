import instance from "../config/axios";

export const signUp = (user) => {
    return instance.post("/auth/signup", user );
}

export const logIn = (credentials) => {
    return instance.post("/auth/login", credentials );
}