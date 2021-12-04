import $api from "../http";

export default class UploadService {
    static async uploadFile(file, dir, user_id) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("dir", `${user_id}/${dir}`);

        return $api.post('upload', formData);
    }
}