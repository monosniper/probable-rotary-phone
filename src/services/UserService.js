import $api from "../http";

export default class UserService {
    static async fetchUsers() {
        return $api.get('users');
    }

    static async updateUser(data, id) {
        return $api.post(`users/${id}/update`, data);
    }

    static async updatePassword(data, id) {
        return $api.post(`users/${id}/changePassword`, data);
    }
}