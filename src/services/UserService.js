import $api from "../http";

export default class UserService {
    static async fetchUsers() {
        return await $api.get('users');
    }

    static async updateUser(data, id) {
        return await $api.post(`users/${id}/update`, data);
    }
}