import client from "./client";

const register = (userInfo) => {
    console.log('register', userInfo)
    return client.post("/users", userInfo)
};

export default { register };