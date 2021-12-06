import $api from "../http";

export default class CassaService {
    static async fetchPulls() {
        return $api.get('cassa/pulls');
    }

    static async createPull(data) {
        return $api.post('cassa/pull', data);
    }

    static async getTransactions() {
        return $api.get('cassa/transactions');
    }

    static async updateTransaction(transaction_id, data) {
        return $api.post(`cassa/transactions/${transaction_id}/update`, data);
    }

    static async getTransaction(transaction_id) {
        return $api.get(`cassa/transactions/${transaction_id}`);
    }

    static async fetchFakePushs() {
        return $api.get('cassa/fake/pushs');
    }
}