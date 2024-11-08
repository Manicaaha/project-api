import { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loading/Loading"
//https://www.omdbapi.com/?i=${ZMIENIA SIE}&apikey=39b7129b
function Movies(){
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const handleSearch = async() => {
        setisLoading(true)
        try{
            const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=39b7129b`)
            const result = await response.json()
            console.log(result.Search)
            setMovies(result.Search)
        }
        catch(error){
            console.log(error);
            
        }
        setisLoading(false)
    }
    return (
        <div>
            <input type="text" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            
            <div>
                {
                    movies.map((movie, index)=>
                        <li><Link to={"/movie/" + movie.imdbID} key={index}>{movie.Title}</Link></li>
                        
                    )
                }
            </div>
            {isLoading && <Loading></Loading>}
        </div>
    )
}
export default Movies