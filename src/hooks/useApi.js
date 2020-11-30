import React, { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const request = async (...args) => {
        // console.log("args", args)
        setLoading(true)
        const response = await apiFunc(...args)
        setLoading(false)
        console.log('responsedata', response)

        // if (!response.ok) return setError(true)
        // setError(false)
        // setData(response.data);
        setError(!response.ok);
        setData(response.data);
        return response;

    }
    // console.log(data)
    return { error, data, loading, request }
}