import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import UserService from "../services/UserService";

export default class Store {

    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);

        if (localStorage.getItem('token')) {
            this.checkAuth();
        }
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(username, password, onSuccess, onError) {
        try {
            const response = await AuthService.login(username, password)

            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e);
        }
    }

    async register(username, email, password) {
        try {
            const response = await AuthService.register(username, email, password);

            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');

            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async updateUser(data, onSuccess, onError) {
        try {
            const response = await UserService.updateUser(data, this.user.id);

            this.setUser(response.data.user);

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }
}