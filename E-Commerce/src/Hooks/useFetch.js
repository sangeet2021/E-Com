import { useEffect, useState } from "react"

const useFetch  = (url, initialData = null) => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const clearData = () => {
        setData(initialData);
    }

    useEffect(() => {
        setIsPending(true)
        const fetchIt = async() => {
            try{
                const response = await fetch(url,);
                if(!response.ok){
                    throw new Error('An error occured, please try again later')
                }
                const resData = await response.json();
                setData(resData)
                
            }catch(err){
                setError(err.message || "Something went wrong. Please try again later.")
            }finally{
                setIsPending(false)
            }
        }
        fetchIt();
    }, [url])

    return {data, error, isPending, clearData}
}

export default useFetch;