import Axios from "axios";
import {IAcousticContentArticle} from "./acousticContentApi.types";

const getArticle = (articleId: string): Promise<IAcousticContentArticle> => {
    return Axios.get<IAcousticContentArticle>(`https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/${articleId}`)
        .then((response) => {
            return response.data;
        })
};

const getImageLink = (imageSlug?: string): string => {
    if (!imageSlug) {
        return '';
    }
    return `https://content-eu-4.content-cms.com${imageSlug}`
}

export const AcousticContentApi = {
    getArticle,
    getImageLink,
};