import axios from "axios"
import React, {useContext} from "react"

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})
export default instance
