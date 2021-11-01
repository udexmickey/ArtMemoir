import { useEffect, useState } from 'react'

export default function useFetch(url ='', options= null) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        let isMounted = true;
        fetch(url, options)
        .then(res => res.json())
        .then(data => { 
            if(isMounted) {
                setError(null) 
                setData(data)
            }
        })
        .catch(error =>{ 
            if(isMounted){
                setError(error)
                setData(null)
            }
        })
        .finally(() => isMounted && setLoading(false))

        return (() => isMounted = false)
    }, [url, options])
// console.log(data[1].id);
    return {loading, error, data}
}


