import { http } from "@/utils/http";

export const addArticle = (data) => {
    return async dispatch => {
        await http.post(`mp/articles?draft=${false}`, data)
    }
}

export const editArticle = (data,draft=false) => { 
    return async dispatch => {
        await http.put(`mp/articles/${data.id}?draft=${draft}`, data)
    }
}

export const getArticle = id => {
    return async dispatch => {
      const data = await http.get('mp/articles/' + id)
      return data
    }
  }
