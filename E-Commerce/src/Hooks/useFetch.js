import { useEffect, useState } from "react"

const useFetch  = (url, config = {}, initialData) => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const fetchIt = async() => {
            try{
                const response = await fetch(url);
                const resData = await response.json();
                setData(resData)
                
            }catch(err){
                setError(err || "Something went wrong. Please try again later.")
            }finally{
                setIsPending(false)
            }
        }
        fetchIt();
    }, [url])

    return {data, error, isPending}
}

export default useFetch;