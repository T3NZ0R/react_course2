import {axiosService} from "../services/axios.service";
import {urls} from "../config/urls";

export const albumService = {
    getByUserId: (id) => axiosService.get(`${urls.albums}/?userId=${id}`).then(value => value.data),
};