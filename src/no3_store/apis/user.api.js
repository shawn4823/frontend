import axios from "axios";

export const userTotalGetApi = async () => {
    try {
        const reponse = await axios.get("http://localhost:3001/user")
        return response.data
    } catch (error) {
        return error
    }
}

export const userGetApi = async (id) => {
    try {
        const reponse = await axios.get(`http://localhost:3001/user/1/${id}`)
        return response.data
    } catch (error) {
        return error

    }
}

export const userPostApi = async (dataObj) => {
    try {
        const reponse = await axios.post("http://localhost:3001/user", dataObj)
        return response.data
    } catch (error) {
        return error
    }
}

export const userPutApi = async (dataObj) => {
    try {
        const reponse = await axios.put(`http://localhost:3001/user/${dataObj.id}`, dataObj)
        return response.data
    } catch (error) {
        return error
    }
}

export const userDeleteApi = async (id) => {
    try {
        const reponse = await axios.delete(`http://localhost:3001/user/1/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}

