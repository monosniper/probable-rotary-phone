import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import UserService from "../services/UserService";
import CassaService from "../services/CassaService";
import UploadService from "../services/UploadService";

export default class Store {

    user = {};
    isAuth = true;
    isLoading = false;
    isLoginModalOpen = false;

    constructor() {
        makeAutoObservable(this);
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

    setLoginModel(bool) {
        this.isLoginModalOpen = bool;
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
            const response = await axios.get(`${API_URL}refresh`, {withCredentials: true});
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
            const response = await UserService.updateUser({data}, this.user.id);

            this.setUser(response.data);

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async updatePassword(oldPassword, newPassword, onSuccess, onError) {
        try {
            const response = await UserService.updatePassword({oldPassword, newPassword}, this.user.id);

            this.setUser(response.data);
            this.logout();
            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async getAllPulls() {
        try {
            const response = await CassaService.fetchPulls();

            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    async getAllUsers() {
        try {
            const response = await UserService.fetchUsers();

            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    async pushMoney(data) {
        try {
            function encodeQuery(data){
                let query = ""
                for (let d in data)
                    query += encodeURIComponent(d) + '=' +
                        encodeURIComponent(data[d]) + '&'
                return query.slice(0, -1)
            }

            const url = 'https://www.free-kassa.ru/merchant/cash.php?'+encodeQuery(data);


        } catch (e) {
            console.log(e)
        }
    }

    async createPull(card, amount, onSuccess, onError) {
        try {
            const response = await CassaService.createPull({card, amount, user_id: this.user.id});

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async getTransactions() {
        try {
            const response = await CassaService.getTransactions();
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    async setTransactionStatus(transaction_id, status, onSuccess, onError) {
        try {
            const response = await CassaService.updateTransaction(transaction_id, {status});

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async getTransactionStatus(transaction_id) {
        try {
            const response = await CassaService.getTransaction(transaction_id);

            return response.data[0].status;
        } catch (e) {
            console.log(e)
        }
    }

    async uploadFiles(data, del) {
        try {
            data.forEach(async (item) => {
                await UploadService.uploadFile(item.file, item.dir, del);
            })
        } catch (e) {
            console.log(e)
        }
    }

    async acceptUserVerification(user_id, onSuccess, onError) {
        try {
            const response = await UserService.acceptUserVerification(user_id);

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async rejectUserVerification(user_id, onSuccess, onError) {
        try {
            const response = await UserService.rejectUserVerification(user_id);

            onSuccess && onSuccess(response);
        } catch (e) {
            onError && onError(e);
            console.log(e)
        }
    }

    async pendingUserVerification() {
        try {
            const response = await UserService.setUserToPendingForVerification(this.user.id);

            this.setUser(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    async getVerificationImages(user_id) {
        try {
            const response = await UserService.getVerificationImages(user_id);

            return response.data[0];
        } catch (e) {
            console.log(e)
        }
    }

    async getSongs() {
        try {
            const response = await UploadService.getSongs();

            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    async deleteSong(song) {
        try {
            const response = await UploadService.deleteSong(song);

            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
}