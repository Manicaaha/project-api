import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "./Loading/Loading"

function Movie(){
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        //start loading
        setisLoading(true)
        try{
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=39b7129b`)
            const result = await response.json()
            console.log(result)
            setMovie(result)
            //stop loading
        }
        catch(error){
            console.log(error);
        }
        setisLoading(false)
    }

    return(
        <div>
            {isLoading && <Loading></Loading>}
            <h2>{movie.Title }</h2>
            <h3>{movie.Plot}</h3>
        </div>
    )
}
export default Movie