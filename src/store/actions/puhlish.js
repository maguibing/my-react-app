// import { ADD_ARTICLE } from "./actionTypes";
import { http } from "@/utils/http";

export const addArticle = (data) => {
    return async dispatch => {
        await http.post(`mp/articles?draft=${false}`, data)
    }
}
