import {axiosService} from "../services/axios.service";
import {urls} from "../config/urls";

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.posts}/?userId=${id}`).then(value => value.data),
    getAll: () => axiosService.get(urls.posts).then(value => value.data)
}