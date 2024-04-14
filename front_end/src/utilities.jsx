import axios from "axios";

export const api = axios.create({
    baseURL : "http://127.0.0.1:8000/api/v1/"


})

export const userLogin = async (email, password) => {
    const response = await api.post("users/login/", { email, password });
    if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
        return { user, email };
    } else {
        console.log("Login failed", response);
    }
    


}