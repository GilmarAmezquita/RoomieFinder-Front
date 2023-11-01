import instance from "../config/axios";

export const getAllPersonalities = () => {
    return instance.get("/auth/personalities");
}