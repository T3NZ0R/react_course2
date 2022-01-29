import {axiosService} from "../services/axios.service";
import {urls} from "../config/urls";

export const postService = {
    getByPostId:(id) => axiosService.get(`${urls.posts}/?postId=${id}`).then(value => value.data)
}