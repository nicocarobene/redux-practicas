import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

export const getAll= async ()=> {
    const res = await axios.get(baseURL)
    return res.data 
}
export const creatNew = async (content) =>{
    const note= {content, important: false}
    const response = await axios.post(baseURL,note)
    return response.data
} 