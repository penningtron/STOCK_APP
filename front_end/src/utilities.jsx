import axios from "axios";

export const api = axios.create({
    // base url for local dev
    // baseURL : "http://127.0.0.1:8000/api/v1/"

    baseURL: "http://ec2-3-88-1-97.compute-1.amazonaws.com:8000/api/",


})

export const userLogin = async (email, password) => {
    const response = await api.post("users/login/", { email, password });
    if (response.status === 200) {
        console.log(response.data)
        const { user, token } = response.data;
        // console.log(user)
        // console.log(token)
        localStorage.setItem("token", token);
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
        return { user, email };
    } else {
        console.log("Login failed", response);
    }
    


}

export const userLogout = async () => {

    const response = await api.post("users/logout/");
    if (response.status === 204) {
        localStorage.removeItem("token");
        delete api.defaults.headers.common['Authorization'];
        return null;
    } else {
        console.log("Logout failed", response);
    }
}

export const userConfirmation = async () => {
    const token = localStorage.getItem("token");
    if(token) {
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await api.get("users/");
    }
}