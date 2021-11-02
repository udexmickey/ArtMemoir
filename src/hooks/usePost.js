import React from 'react'
import Axios from 'axios'
import { useState } from 'react/cjs/react.development'

function usePost(props) {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    setLoading=false
    Axios.post(url, options)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            setError(err)
        })
        .finally( setLoading=true )

        return {loading, data, error}
}

export default usePost